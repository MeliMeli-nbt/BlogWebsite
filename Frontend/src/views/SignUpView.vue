<script setup>
import AccountBox from "vue-material-design-icons/AccountBox.vue";
import KeyVariant from "vue-material-design-icons/KeyVariant.vue";
import Email from "vue-material-design-icons/Email.vue";
</script>

<template>
  <div class="flex flex-col items-center mt-[50px] ">
      <label class="text-[32px] text-[#101010] tracking-[1px] leading-[51.2px] text-center font-navBar font-bold">Đăng ký Stringee<span class="text-[#ff4954]">X</span></label>
      <div class="flex items-center border p-[10px] w-[520px] mt-10">
        <AccountBox class="" fillColor="#b7bbbd"
              :size="25" />
        <input class="ml-[10px] leading-[32px] font-[300px] bg-[#ffffff]" type="text" placeholder="Tên người dùng" name="username" v-model="username">
      </div>
      <div class="flex items-center border p-[10px] w-[520px] mt-4">
        <Email class="" fillColor="#b7bbbd"
                              :size="25" />
        <input class="ml-[10px] leading-[32px] font-[300px] bg-[#ffffff]" type="text" placeholder="Địa chỉ Email" name="email" v-model="email">
      </div>
      <div class="flex items-center border p-[10px] w-[520px] mt-4">
        <KeyVariant class="" fillColor="#b7bbbd"
                              :size="25" />
        <input class="ml-[10px] leading-[32px] font-[300px] bg-[#ffffff]" type="password" placeholder="Mật khẩu" name="password" v-model="password">
      </div>
      <a class="cursor-pointer border-[1px] 
              uppercase text-[#ffffff] text-center
              border-solid border-[#ff4954] rounded-sm bg-[#ff4954] shadow-lg hover:shadow-[#ff4954]/50
              p-[10px] w-[520px] mt-4"
                @click="submitForm"
                > Đăng ký miễn phí </a>
      <div class="flex items-center mt-4">
        <label class="ml-[290px]">Bạn đã có tài khoản?<span class="text-[#0facf3] cursor-pointer"
                                                  @click="$router.push('/signUp')"
                                                  >Đăng nhập</span></label>
      </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'SignUp',
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async submitForm() {
      this.errors = [];

      if (this.username === "") {
        this.errors.push("The name is missing");
        return;
      }

      if (this.email === "") {
        this.errors.push("The email is missing");
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.push("Please enter a valid email");
        return;
      }

      if (this.password === "") {
        this.errors.push("The password is missing");
        return;
      }

      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post("/v1/api/users/signup", formData);
        const toPath = this.$route.query.to || "/";
        this.$router.push(toPath);
      } catch (error) {
        if (error.response) {
          for (const property in error.response.data) {
            this.errors.push(error.response.data[property]);
          }
        } else {
          this.errors.push("Something went wrong. Please try again");
        }
      }
    },
  },
}
</script>
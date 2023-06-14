<script setup>
import AccountBox from "vue-material-design-icons/AccountBox.vue";
import KeyVariant from "vue-material-design-icons/KeyVariant.vue";
import axios from "axios";
</script>

<template>
  <div class="flex flex-col items-center mt-[50px] ">
    <label class="text-[32px] text-[#101010] tracking-[1px] leading-[51.2px] text-center font-navBar font-bold">Đăng nhập</label>

    <div class="flex items-center border p-[10px] w-[520px] mt-10">
      <AccountBox class="" fillColor="#b7bbbd"
            :size="25" />
      <input class="ml-[10px] leading-[32px] font-[300px] bg-[#ffffff]" type="text" placeholder="Tên người dùng" name="username" v-model="username">
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
              type="button"
              @click="submitForm"
              > Đăng nhập </a>

    <div class="flex items-center mt-4">
      <label>Bạn chưa có tài khoản?<span class="text-[#ff4954] cursor-pointer"
                                                @click="$router.push('/signUp')"
                                                >Đăng ký miễn phí</span></label>
      <a class="text-[#0facf3] text-[12.8px] leading-[24px] font-[24px] ml-[140px] cursor-pointer">Quên mật khẩu</a>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/store";

export default {
  name: 'LoginView',
  data() {
    return {
      username: "",
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

      if (this.password === "") {
        this.errors.push("The password is missing");
        return;
      }

      // Gọi action fetchToken từ store
      const authStore = useAuthStore();
      await authStore.fetchToken(this.username, this.password);

      // Kiểm tra xem token đã được lưu vào store và localStorage hay chưa
      const token = authStore.token;
      if (token !== "") {
        // Đăng nhập thành công, thực hiện các hành động khác
        this.$router.push("/board");
      } else {
        // Xử lý lỗi đăng nhập
        this.errors.push("Invalid username or password");
      }
    },
  },
};
</script>
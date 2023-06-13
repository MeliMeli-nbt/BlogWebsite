<script setup>
import MenuDown from "vue-material-design-icons/MenuDown.vue";
</script>

<template>
  <div
      class="w-[calc(100%)] h-[60px] bg-white flex items-center justify-between font-navBar">
      <div class="flex items-center left-1 text-left font-[500px] tracking-[1px] leading-[90px] text-[15px]">
        <div class="ml-[140px] flex items-center">
          <img width="160" class="pt-[10px]" src="/images/_StringeeX-logo.png" />
        </div>
        <div class="flex items-center ml-[40px]">
          <label>Sản phẩm</label>
          <MenuDown class="cursor-pointer ml-1" fillColor="#101010" :size="15" />
        </div>
        <label class="ml-[30px]">Tính năng</label>
        <label class="ml-[30px]">Phí dịch vụ</label>
        <label class="ml-[30px]">Tin tức</label>
        <label class="ml-[30px]">Liên hệ</label>
      </div>

      <div class="flex items-center text-[11px] tracking-[1.7px] leading-[20.9px] mr-[120px]">
        <a class="cursor-pointer border-[1px] uppercase 
                  border-solid border-[#ff4954] text-[#ff4954] rounded-sm hover:bg-[#ff4954] hover:text-[#ffffff]
                  px-4 py-1"
                  @click="$router.push('/signUp')"
                  > Đăng kí miễn phí </a>
        <a class="cursor-pointer border-[1px] uppercase 
                  border-solid border-[#ff4954] text-[#ffffff] rounded-sm bg-[#ff4954] shadow-lg hover:shadow-[#ff4954]/50
                  px-4 py-1 ml-2"
                  @click="$router.push('/')"
                  > Đăng nhập </a>
        <img class="ml-[20px] mr-[4px] rounded-full" src="/images/logo_user.png" />
        <MenuDown
          class="cursor-pointer"
          fillColor="#101010"
          :size="15">
        </MenuDown>
      </div>
  </div>
</template>
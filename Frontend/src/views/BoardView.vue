<script setup>
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div>
    <NavBarBoard />
    <SideBarBoard />
    <div
      class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full">
      <div class="mt-[70px]"></div>
      <RouterView />
      <div class="mb-[100px]"></div>
    </div>
  </div>
</template>

<script>
const NavBarBoard = defineAsyncComponent(() =>
  import("../components/NavBarBoard.vue")
);
const SideBarBoard = defineAsyncComponent(() =>
  import("../components/SideBarBoard.vue")
);

export default {
  name: "Board",
  components: {
    NavBarBoard,
    SideBarBoard,
  },
};
</script>

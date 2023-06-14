<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <NavBarHome />
    <RouterView />
  </div>
</template>

<script>
const NavBarHome = defineAsyncComponent(() =>
  import("../components/NavBarHome.vue")
);
export default {
  name: 'HomeView',
  components: { NavBarHome },
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
  </div>
</template>

<script>
const NavBar = defineAsyncComponent(() =>
  import('../components/NavBar.vue')
)
export default {
  name: 'HomeView',
  components: { NavBar },
}
</script>

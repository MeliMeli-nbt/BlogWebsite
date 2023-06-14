<script setup>
import { defineAsyncComponent } from "vue";
</script>
<template>
  <div class="pt-8">
    <NavBarPage />
    <div class="h-[100%] w-[calc-(100%-300px)]">
      <ContentPage />
    </div>
  </div>
</template>

<script>
const NavBarPage = defineAsyncComponent(() =>
  import("../components/SideBarPage.vue")
);

const ContentPage = defineAsyncComponent(() =>
  import("../components/ContentPage.vue")
);
  export default {
    name: 'Page',
    components: {
      NavBarPage,
      ContentPage
    }
  }
</script>
<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="h-[100%] w-[300px] fixed flex flex-col bg-[#F5F7F9] text-[#3B454E] font-light border-r border-[#D3DCE4]">
    <div class="py-4 px-8">
      <label class="font-bold uppercase text-[#8899A8] text-[15px]"
        >List Page</label
      >
    </div>
    <ul class="flex flex-col">
      <RouterLink class="ml-4 px-4 py-2 hover:bg-[#dbdde1]" to="/">
        <label>Title Page 1</label>
      </RouterLink>
      <RouterLink class="ml-4 px-4 py-2 hover:bg-[#dbdde1]" to="/">
        <label>Title Page 2</label>
      </RouterLink>
      <RouterLink class="ml-4 px-4 py-2 hover:bg-[#dbdde1]" to="/">
        <label>Title Page 3</label>
      </RouterLink>
      <RouterLink class="ml-4 px-4 py-2 hover:bg-[#dbdde1]" to="/">
        <label>Title Page 4</label>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidePage'
};
</script>
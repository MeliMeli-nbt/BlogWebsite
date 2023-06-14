<script setup>
import {
  MagnifyingGlassIcon,
  UsersIcon,
  ArrowsUpDownIcon,
  PlusSmallIcon,
  ChevronRightIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  DocumentTextIcon,
  BellAlertIcon,
  Cog6ToothIcon
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="h-[100%] w-[240px] fixed bg-[#F15A59] text-[#ffffff] font-light flex flex-col justify-between">
    <div>
      <div
        class="flex items-center justify-center border-b-[1px] border-[#E74646] p-4">
        <div
          class="flex items-center px-2 py-1 justify-start bg-[#E74646] border-[#E74646] rounded border w-[190px] cursor-pointer text-[#C0C2C8] hover:text-[#ffffff]">
          <MagnifyingGlassIcon class="h-[20px] w-20px" />
          <label class="ml-2">Quick find</label>
        </div>
      </div>

      <div
        class="flex items-center justify-between p-4 hover:bg-[#E74646] cursor-pointer">
        <div class="flex items-center">
          <UsersIcon
            class="h-[25px] w-[25px] text-[#C0C3C8] border border-[#ffffff] bg-[#ffffff] rounded" />
          <label class="ml-2 cursor-pointer">User Name</label>
        </div>
        <ArrowsUpDownIcon class="h-[15px] w-[15px]" />
      </div>

      <div class="flex items-center justify-between px-4 py-2">
        <label class="text-[#dbdde1]">Team</label>
        <PlusSmallIcon
          class="h-[20px] w-[20px] text-[#dbdde1] rounded hover:bg-[#E74646] hover:text-[#ffffff] cursor-pointer" />
      </div>

      <div
        class="flex items-center justify-start px-4 py-1 hover:bg-[#E74646] hover:text-[#ffffff] cursor-pointer">
        <div
          class="h-[25px] w-[25px] rounded bg-product bg-no-repeat bg-center bg-cover"></div>
        <label class="ml-4 cursor-pointer">Post title</label>
      </div>
    </div>

    <div>
      <div class="border-y border-[#E74646] py-2">
        <div
          class="flex items-center justify-start px-4 py-1 text-[#dbdde1] hover:bg-[#E74646] hover:text-[#ffffff] cursor-pointer">
          <ChevronRightIcon class="h-[20px] w-[20px]" />
          <TrashIcon class="h-[20px] w-[20px] ml-3" />
          <label class="ml-4 cursor-pointer">Trash</label>
        </div>
      </div>

      <div
        class="flex items-center justify-start px-4 py-1 my-2 text-[#dbdde1] hover:bg-[#E74646] hover:text-[#ffffff] cursor-pointer">
        <ArrowDownTrayIcon class="h-[20px] w-[20px]" />
        <label class="ml-4 cursor-pointer">Import content</label>
      </div>

      <div
        class="flex items-center justify-start px-4 py-1 my-2 text-[#dbdde1] hover:bg-[#E74646] hover:text-[#ffffff] cursor-pointer">
        <DocumentTextIcon class="h-[20px] w-[20px]" />
        <label class="ml-4 cursor-pointer">Templates</label>
      </div>

      <div class="flex items-center justify-between p-4">
        <div class="p-3 rounded-full hover:bg-[#D21312] cursor-pointer">
          <BellAlertIcon class="h-[20px] w-[20px] cursor-pointer" />
        </div>

        <div class="p-3 rounded-full bg-[#E74646] hover:bg-[#D21312] cursor-pointer">
          <PlusSmallIcon class="h-[20px] w-[20px]" />
        </div>
        
        <div class="p-3 rounded-full hover:bg-[#D21312] cursor-pointer">
          <Cog6ToothIcon class="h-[20px] w-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

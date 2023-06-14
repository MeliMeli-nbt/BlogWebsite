<script setup>
import {
  PlusCircleIcon,
  ArrowUpTrayIcon,
  EllipsisVerticalIcon,
  ChevronUpIcon,
  ChatBubbleBottomCenterTextIcon,
  RectangleStackIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="w-[calc(100%-240px)] h-[105px] fixed right-0 z-20 bg-[#ffffff] bg-opacity-80 flex flex-col">
    <div class="h-[calc(100%)] flex items-center justify-between">
      <div class="flex items-center ml-[40px]">
        <div
          class="h-[35px] w-[35px] rounded bg-product bg-no-repeat bg-center bg-cover"></div>
        <label class="text-[32px] font-bold text-[#3B454E] ml-4"
          >Post title</label
        >
      </div>

      <div class="flex mr-[30px]">
        <PlusCircleIcon
          class="h-[35px] w-[35px] text-[#E3E8EC] cursor-pointer" />
        <img
          class="rounded-full cursor-pointer"
          width="35"
          src="https://avatars.githubusercontent.com/u/91769169?v=4" />
        <div
          class="flex items-center p-2 ml-4
                border border-[#E3E8EC] rounded hover:bg-[#dbdde1]
                cursor-pointer">
          <ArrowUpTrayIcon class="h-[15px] w-[15px] text-[#5B6975]" />
          <label class="text-[#5B6975] font-light leading-3 text-[15px] ml-2"
            >Share</label
          >
        </div>
        <EllipsisVerticalIcon
          class="h-[35px] w-[35px] ml-[15px] text-[#5B6975] cursor-pointer" />
      </div>
    </div>
    <div
      class="h-[calc(100%-45px)] flex items-center justify-end border-y-[1px] border-[#D3DCE4]">
      <RectangleStackIcon class="h-[20px] w-[20px] text-[#5B6975] mr-6 cursor-pointer" />
      <ClockIcon class="h-[20px] w-[20px] text-[#5B6975] mr-6 cursor-pointer" />
      <ChatBubbleBottomCenterTextIcon
        class="h-[20px] w-[20px] text-[#5B6975] mr-6 cursor-pointer" />
      <ChevronUpIcon class="h-[20px] w-[20px] text-[#5B6975] mr-[40px] cursor-pointer" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

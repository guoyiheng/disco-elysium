
<script setup lang="ts">

</script>

<template>
  <div>
    <div class="bg-trueGray-400 bg-opacity-25 w-full h-1px mt-4" />
    <div class="relative overflow-hidden h-full" flex="~ col" md="flex-row">
      <div class="flex flex-col h-full w-full md:w-1/2 py-4 px-4 items-start">
        <div class="flex items-center">
          <a i-carbon:text-annotation-toggle opacity50 mr-2 />
          <span opacity50 text-sm>TEXT</span>
        </div>
        <div class="overflow-y-scroll h-full">
          <!-- <div v-for="i in 100">
            {{ i }}
          </div> -->
        </div>
      </div>
      <div class="bg-trueGray-400 bg-opacity-25 w-full h-1px" md="h-full w-1px" />
      <div class="flex flex-col h-full w-full md:w-1/2 py-4 px-4 items-start">
        2
      </div>
    </div>
  </div>
</template>

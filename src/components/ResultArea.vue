
<script setup lang="ts">
onMounted(() => {
  // const { data } = useFetch('https://gist.github.com/guoyiheng/7dd033b139e8ad55ad05469ed822ec50').get().json()
})
</script>

<template>
  <div>
    <div class="bg-trueGray-400 bg-opacity-25 w-full h-1px my-4" />
    <div class="relative overflow-hidden h-full" flex="~ col" md="flex-row">
      <div class="flex flex-col h-full w-full items-start">
        <div class="flex items-center py-4">
          <a i-carbon:text-annotation-toggle opacity50 mr-2 />
          <span opacity50 text-sm>TEXT</span>
        </div>
        <div class="overflow-y-scroll h-70vh w-full">
          <div
            v-for="i in 100"
            :key="i"
            whitespace-pre-wrap
            break-all
            hyphens-auto
            mb-4
            :text="i <= 10 ? '$text-color' : '$text-color-shallow'"
          >
            {{ i }} xxxxxxxxx xxxxxxxxx xxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxx xxxxxxx
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

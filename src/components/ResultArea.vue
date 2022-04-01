
<script setup lang="ts">
import { inputText, sentenceFilter } from '~/logics'

const clipboard = useClipboard()
function copy(s: string) {
  clipboard.copy(s.replace(`<span class="highlight">${inputText.value}</span>`, inputText.value))
}

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  sentenceFilter,
  {
    itemHeight: 20,
    overscan: 20,
  },
)
// 变化时滚动到最上方，不然找不到
watch(sentenceFilter, () => {
  scrollTo(0)
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
        <div v-bind="containerProps" class="overflow-y-scroll h-70vh w-full">
          <div v-bind="wrapperProps">
            <div
              v-for="(s, i) in list"
              :key="i"
              whitespace-pre-wrap
              break-all
              hyphens-auto
              mb-4
              opacity="50 hover:100"
              cursor-pointer
              @click="copy(s.data)"
              v-html="s.data"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.highlight {
  color: var(--primary-color);
}
</style>

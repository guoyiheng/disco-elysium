
<script setup lang="ts">
import { inputText, sentenceFilter } from '~/logics'
const clipboard = useClipboard()
function copy(s: string) {
  clipboard.copy(s.replace(`<span class="highlight">${inputText.value}</span>`, inputText.value))
}
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
            v-for="(s, i) in sentenceFilter"
            :key="i"
            whitespace-pre-wrap
            break-all
            hyphens-auto
            mb-4
            opacity="50 hover:100"
            cursor-pointer
            @click="copy(s)"
            v-html="s"
          />
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

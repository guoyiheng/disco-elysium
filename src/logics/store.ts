import { computed, ref } from 'vue'
import { useDebounce, useLocalStorage } from '@vueuse/core'
import sentenceJson from '~/sentence/index.json'

// error
export const error = ref<Error | null>(null)

// origin data
export const sentence = computed(() => {
  return sentenceJson.sentence.split('###')
})
// show data
export const sentenceFilter = ref(sentence.value)

// input
export const inputText = useLocalStorage('inputText', 'xxx')

watchDebounced(
  inputText,
  () => {
    sentenceFilter.value = sentence.value.filter((s: string) => {
      return s.includes(inputText.value)
    }).map(s => s.replace(inputText.value, `<span class="highlight">${inputText.value}</span>`))
  },
  { debounce: 500 },
)

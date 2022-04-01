import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import sentenceJson from '~/sentence/index.json'

// error
export const error = ref<Error | null>(null)

// origin data
export const sentence = computed(() => {
  return sentenceJson.sentence.split('###')
})

// input
export const inputText = useLocalStorage('inputText', 'xxx')

// show data
// export const sentenceFilter = ref(sentence.value)
// watchDebounced(
//   inputText,
//   () => {
//     sentenceFilter.value = sentence.value.filter((s: string) => {
//       return s.includes(inputText.value)
//     }).map(s => s.replace(inputText.value, `<span class="highlight">${inputText.value}</span>`))
//   },
//   { debounce: 500 },
// )
export const sentenceFilter = computed(() => {
  return sentence.value.filter((s: string) => {
    return s.includes(inputText.value)
  }).map(s => s.replace(inputText.value, `<span class="highlight">${inputText.value}</span>`))
})

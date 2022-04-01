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
export const sentenceFilter = computed(() => {
  return sentence.value.filter((s: string) => {
    return s.includes(inputText.value)
  }).map(s => s.replace(inputText.value, `<span class="highlight">${inputText.value}</span>`))
})

// bounding
export const selectMode = useLocalStorage('selectMode', false)
export const toggleSelectMode = useToggle(selectMode)
const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))
useEventListener('scroll', bounding.update, true)

export const boxStyles = computed(() => {
  if (selectMode.value && element.value?.classList.contains('dialog-item')) {
    return {
      display: 'block',
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top}px`,
      backgroundColor: '#d7545566',
      transition: 'all 0.2s linear',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

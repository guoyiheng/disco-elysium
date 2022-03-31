import { ref, computed } from 'vue'
import { useDebounce, useLocalStorage } from '@vueuse/core'


export const text = useLocalStorage('flags', 'gm')

export const error = ref<Error | null>(null)

export const findRaw = function () {
  return ref('')
}

// export const throttleFind = useDebounce(findRaw, 300)
// export const findRegex = computed(() => {
//   error.value = null
//   try {
//     return new RegExp(throttleFind.value, flags.value)
//   }
//   catch (e) {
//     error.value = e
//     console.error(e)
//     return new RegExp('', 'g')
//   }
// })

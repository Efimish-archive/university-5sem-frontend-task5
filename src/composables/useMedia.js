import { ref } from 'vue'

export function useMedia(initial) {
  const count = ref(initial)
  const isActive = ref(false)

  const handleClick = () => {
    if (isActive.value) {
      count.value--
      isActive.value = false
    } else {
      count.value++
      isActive.value = true
    }
  }

  return { count, isActive, handleClick }
}

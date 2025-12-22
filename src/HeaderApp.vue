<script setup>
import { computed } from 'vue'

const props = defineProps({
  purchased: Array,
})

const sum = computed(() =>
  props.purchased.reduce((total, product) => {
    return total + product.price
  }, 0),
)
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ sum }}</div>
</template>

<script setup>
import { useProductStore } from './stores/products'

const productStore = useProductStore()
</script>

<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ productStore.sum }}</div>
</template>

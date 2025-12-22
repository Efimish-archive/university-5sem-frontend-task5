<script setup>
import { useProductStore } from './stores/products';
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'

const productStore = useProductStore();
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode :product="product" v-for="product in productStore.products" :key="product.id" />
    </div>
  </div>
</template>

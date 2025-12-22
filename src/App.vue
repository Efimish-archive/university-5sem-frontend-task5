<script setup>
import { ref } from 'vue'
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'

const purchased = ref([])

const products = ref([
  {
    id: 1,
    name: 'Test',
    price: 500,
    collection_medias: ['media1', 'media2', 'media3'],
    meta: {
      view: 1500,
      comment: 100,
      like: 50,
    },
    user: {
      id: 1,
      full_name: 'Alex Alex Alex',
    },
  },

  {
    id: 2,
    name: 'Test 3',
    price: 5000,
    collection_medias: ['media1'],
    meta: {
      view: 200,
      comment: 1,
      like: 25,
    },
    user: {
      id: 2,
      full_name: 'Palex Palex Palex',
    },
  },
])

const onKupit = (id) => {
  const product = products.value.find((i) => i.id == id)
  purchased.value.push({ ...product })
}
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp :purchased="purchased" />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode :product="product" v-for="product in products" :key="product.id" @kupit="onKupit" />
    </div>
  </div>
</template>

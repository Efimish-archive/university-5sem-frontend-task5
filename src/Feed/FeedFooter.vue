<script setup>
import { inject } from 'vue';
import { useProductStore } from '@/stores/products';
import CommentCount from './view/CommentCount.vue';
import LikeCount from './view/LikeCount.vue';
import ViewCount from './view/ViewCount.vue';

const productStore = useProductStore();
const product = inject('product');
</script>

<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount />
    <LikeCount />
    <ViewCount />

    <button class="bg-black text-white p-2" @click="productStore.buy(product.id)">Купить</button>
  </div>
</template>

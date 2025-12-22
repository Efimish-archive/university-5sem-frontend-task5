<script setup>
import { inject } from 'vue';
import FeedFooter from './FeedFooter.vue';
import FeedHeader from './FeedHeader.vue';

const product = inject('product');
</script>

<template>
  <div class="relative overflow-hidden">
    <FeedHeader :name="product.name" :count="product.collection_medias.length" :user="product.user" />
    <FeedFooter :like="product.meta.like" :view="product.meta.view" :comment="product.meta.comment" />
  </div>
</template>

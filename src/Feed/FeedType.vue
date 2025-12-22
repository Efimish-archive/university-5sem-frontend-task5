<script setup>
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'

const props = defineProps({
  product: Object,
  user: Object,
  meta: Object,
})

const emit = defineEmits({
  kupit: null,
})

const onKupit = () => {
  emit('kupit', props.product.id)
}
</script>
<template>
  <div class="relative overflow-hidden">
    <FeedHeader :name="product.name" :count="product.collection_medias.length" :user="user" />

    <FeedFooter :like="meta.like" :view="meta.view" :comment="meta.comment" @kupit="onKupit" />
  </div>
</template>

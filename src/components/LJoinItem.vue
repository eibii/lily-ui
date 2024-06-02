<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as _ from 'lodash-es'

const item = ref<HTMLElement | null>(null)

onMounted(() => {
  if (item.value) {
    _.map(item.value.children, (el: HTMLElement) => {
      el.classList.add('join-item')
    })
  }
})
</script>

<template>
  <div ref="item">
    <slot />
  </div>
</template>

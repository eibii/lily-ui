<script setup lang="ts">
import { onMounted, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    borderClass?: string
  }>(),
  {
    borderClass: 'border-base-300'
  }
)
const accordionGroupId = self.crypto.randomUUID()

onMounted(() => {
  nextTick(() => {
    const el = document.querySelector(`#id-${accordionGroupId}`)
    if (el) {
      const elements = el.querySelectorAll('.accordion-item')
      elements.forEach((element) => {
        element.classList.add('join-item')
        element.classList.add('border')
        element.classList.add(props.borderClass)
      })
    }
  })
})
</script>

<template>
  <div :id="`id-${accordionGroupId}`" class="join join-vertical w-full">
    <slot />
  </div>
</template>

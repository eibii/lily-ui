<script setup lang="ts">
import type { StyleContentBorder } from '../@types/Props'

import { computed } from 'vue'

withDefaults(
  defineProps<{
    contentClass?: string
    styleContent?: StyleContentBorder
  }>(),
  {
    contentClass: '',
    styleContent: 'default'
  }
)
const $slots = defineSlots()
const items = computed(() => {
  if (!$slots.default) return []
  return $slots.default().reduce((items: any[], child: any) => {
    if (child.type.__name === 'LStackItem') {
      items.push({ ...child, props: { ...child.props } })
    }
    return items
  }, [])
})
</script>

<template>
  <div class="stack">
    <template v-for="(item, i) in items" :key="i">
      <Component
        :is="item"
        :class="[
          $props.contentClass,
          {
            shadow: $props.styleContent === 'shadow' && i > 0 && i < items.length - 1,
            'shadow-md': $props.styleContent === 'shadow' && i === 0,
            'shadow-sm': $props.styleContent === 'shadow' && i === items.length - 1,
            'place-content-center': $props.styleContent === 'default',
            'border border-base-content': $props.styleContent === 'border'
          }
        ]"
      />
    </template>
  </div>
</template>

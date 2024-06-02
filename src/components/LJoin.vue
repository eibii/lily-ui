<script setup lang="ts">
import { computed } from 'vue'

withDefaults(
  defineProps<{
    vertical?: boolean
  }>(),
  {
    vertical: false
  }
)
const $slots = defineSlots()
const items = computed(() => {
  if (!$slots.default) return []
  return $slots.default().reduce((items: any[], child: any) => {
    if (child.type.__name === 'LJoinItem') {
      items.push({ ...child, props: { ...child.props } })
    }
    return items
  }, [])
})
</script>

<template>
  <div :class="['join', { 'join-vertical': $props.vertical }]">
    <template v-for="item in items" :key="item">
      <Component :is="item" />
    </template>
  </div>
</template>

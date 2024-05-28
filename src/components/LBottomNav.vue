<script setup lang="ts">
import type { SizeBase } from '../@types/Props'

type Item = {
  itemClass?: string
  iconClass?: string
  title?: string
  active?: boolean
  disabled?: boolean
}

defineEmits<{
  (e: 'onClick', item: Item): void
}>()
withDefaults(
  defineProps<{
    items: Item[]
    itemsClass?: string
    size?: SizeBase
  }>(),
  {
    itemsClass: '',
    size: 'default'
  }
)
</script>

<template>
  <div
    :class="[
      'btm-nav',
      {
        'btm-nav-xs': $props.size === 'xs',
        'btm-nav-sm': $props.size === 'sm',
        'btm-nav-md': $props.size === 'default',
        'btm-nav-lg': $props.size === 'lg'
      }
    ]"
  >
    <template v-for="(item, i) in $props.items" :key="i">
      <button
        :class="[item.itemClass || $props.itemsClass, { active: item.active }]"
        :disabled="item.disabled"
        @click="$emit('onClick', item)"
        @keypress.enter="$emit('onClick', item)"
      >
        <i :class="item.iconClass" />
        <span v-if="item.title" class="btm-nav-label">{{ item.title }}</span>
      </button>
    </template>
  </div>
</template>

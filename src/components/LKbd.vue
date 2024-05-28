<script setup lang="ts">
import type { SizeBase } from '../@types/Props'

withDefaults(
  defineProps<{
    size?: SizeBase
  }>(),
  {
    size: 'default'
  }
)
</script>

<template>
  <kbd
    :class="[
      'kbd',
      {
        'kbd-lg': size === 'lg',
        'kbd-md': size === 'default',
        'kbd-sm': size === 'sm',
        'kbd-xs': size === 'xs'
      }
    ]"
  >
    <slot />
  </kbd>
</template>

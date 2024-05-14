<script setup lang="ts">
import type { SizeBase } from '../@types/Props'

withDefaults(
  defineProps<{
    size?: SizeBase
    effect?: 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost'
    outline?: boolean
  }>(),
  {
    size: 'default',
    effect: 'default',
    outline: false
  }
)
</script>

<template>
  <span
    :class="[
      'badge',
      {
        'badge-xs': $props.size === 'xs',
        'badge-sm': $props.size === 'sm',
        'badge-md': $props.size === 'default',
        'badge-lg': $props.size === 'lg',
        'badge-neutral': $props.effect === 'neutral',
        'badge-primary': $props.effect === 'primary',
        'badge-secondary': $props.effect === 'secondary',
        'badge-accent': $props.effect === 'accent',
        'badge-ghost': $props.effect === 'ghost',
        'badge-outline': $props.outline
      }
    ]"
  >
    <slot />
  </span>
</template>

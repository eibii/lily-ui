<script setup lang="ts">
import type { SizeBase, Severity, EffectBase } from '../@types/Props'

withDefaults(
  defineProps<{
    size?: SizeBase
    effect?: EffectBase
    severity?: Severity
    outline?: boolean
  }>(),
  {
    size: 'default',
    effect: 'default',
    severity: 'default',
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
        'badge-neutral': $props.severity === 'neutral',
        'badge-primary': $props.severity === 'primary',
        'badge-secondary': $props.severity === 'secondary',
        'badge-accent': $props.severity === 'accent',
        'badge-success': $props.severity === 'success',
        'badge-error': $props.severity === 'warning',
        'badge-danger': $props.severity === 'danger',
        'badge-info': $props.severity === 'info',
        'badge-ghost': $props.effect === 'ghost',
        'badge-outline': $props.outline
      }
    ]"
  >
    <slot />
  </span>
</template>

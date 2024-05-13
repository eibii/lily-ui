<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'default' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
    size?: 'xs' | 'sm' | 'default' | 'lg'
    severity?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'neutral'
  }>(),
  {
    type: 'default',
    size: 'default',
    severity: 'default'
  }
)
</script>

<template>
  <span
    :class="[
      'loading',
      {
        'loading-spinner': $props.type === 'default',
        'loading-dots': $props.type === 'dots',
        'loading-ring': $props.type === 'ring',
        'loading-ball': $props.type === 'ball',
        'loading-bars': $props.type === 'bars',
        'loading-infinity': $props.type === 'infinity',
        'loading-xs': $props.size === 'xs',
        'loading-sm': $props.size === 'sm',
        'loading-md': $props.size === 'default',
        'loading-lg': $props.size === 'lg',
        'text-primary': $props.severity === 'primary',
        'text-secondary': $props.severity === 'secondary',
        'text-accent': $props.severity === 'accent',
        'text-info': $props.severity === 'info',
        'text-success': $props.severity === 'success',
        'text-warning': $props.severity === 'warning',
        'text-error': $props.severity === 'danger',
        'text-neutral': $props.severity === 'neutral'
      }
    ]"
  ></span>
</template>

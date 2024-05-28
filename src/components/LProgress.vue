<script setup lang="ts">
import type { Severity } from '../@types/Props'

withDefaults(
  defineProps<{
    value?: number
    max?: number
    widthClass?: string
    severity?: Severity
  }>(),
  {
    value: undefined,
    max: 100,
    widthClass: 'w-full',
    severity: 'default'
  }
)
</script>

<template>
  <progress
    :class="[
      'progress',
      $props.widthClass,
      {
        'progress-primary': $props.severity === 'primary',
        'progress-secondary': $props.severity === 'secondary',
        'progress-accent': $props.severity === 'accent',
        'progress-info': $props.severity === 'info',
        'progress-success': $props.severity === 'success',
        'progress-warning': $props.severity === 'warning',
        'progress-error': $props.severity === 'danger',
        'progress-neutral': $props.severity === 'neutral'
      }
    ]"
    v-bind="
      $props.value
        ? {
            value: $props.value,
            max: $props.max
          }
        : {}
    "
  />
</template>

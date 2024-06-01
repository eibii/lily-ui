<script setup lang="ts">
import type { Severity, PositionDivider } from '../@types/Props'

withDefaults(
  defineProps<{
    text?: string
    horizontal?: boolean
    severity?: Severity
    position?: PositionDivider
  }>(),
  {
    text: '',
    horizontal: false,
    severity: 'default',
    position: 'default'
  }
)
</script>

<template>
  <div
    :class="[
      'divider',
      {
        'divider-horizontal': $props.horizontal,
        'divider-start': $props.position === 'start',
        'divider-end': $props.position === 'end',
        'divider-primary': $props.severity === 'primary',
        'divider-secondary': $props.severity === 'secondary',
        'divider-accent': $props.severity === 'accent',
        'divider-success': $props.severity === 'success',
        'divider-error': $props.severity === 'danger',
        'divider-warning': $props.severity === 'warning',
        'divider-info': $props.severity === 'info',
        'divider-neutral': $props.severity === 'neutral'
      }
    ]"
  >
    {{ $props.text }}
  </div>
</template>

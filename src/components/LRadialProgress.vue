<script setup lang="ts">
withDefaults(
  defineProps<{
    value: number
    size?: string
    thickness?: string
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
    size: '',
    thickness: '',
    severity: 'default'
  }
)
</script>

<template>
  <div
    role="progressbar"
    :class="[
      'radial-progress',
      {
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
    :style="{ '--value': $props.value, '--size': $props.size, '--thickness': $props.thickness }"
  >
    {{ $props.value }}%
  </div>
</template>

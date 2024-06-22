<script setup lang="ts">
import type { Severity, SizeBase } from '../@types/Props'

import { ref, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: number
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    size?: SizeBase
    severity?: Severity
  }>(),
  {
    modelValue: 0,
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    size: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const range = ref(0)
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', +target.value)
}

onMounted(() => {
  range.value = props.modelValue
})
</script>

<template>
  <input
    v-model="range"
    type="range"
    :min="$props.min"
    :max="$props.max"
    :step="$props.step"
    :class="[
      'range',
      {
        'range-primary': $props.severity === 'primary',
        'range-secondary': $props.severity === 'secondary',
        'range-accent': $props.severity === 'accent',
        'range-neutral': $props.severity === 'neutral',
        'range-success': $props.severity === 'success',
        'range-error': $props.severity === 'danger',
        'range-warning': $props.severity === 'warning',
        'range-info': $props.severity === 'info',
        'range-xs': $props.size === 'xs',
        'range-sm': $props.size === 'sm',
        'range-md': $props.size === 'default',
        'range-lg': $props.size === 'lg'
      }
    ]"
    :disabled="$props.disabled"
    v-bind="$attrs"
    @input="onInput"
  />
</template>

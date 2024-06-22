<script setup lang="ts">
import type { Severity, SizeBase } from '../@types/Props'

import { ref, useAttrs, onMounted } from 'vue'

defineEmits<{
  (e: 'update:modelValue', modelValue: any): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: any
    value: any
    label?: string
    labelClass?: string
    disabled?: boolean
    size?: SizeBase
    severity?: Severity
  }>(),
  {
    modelValue: '',
    value: '',
    label: undefined,
    labelClass: '',
    disabled: false,
    size: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const radio = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (props.value === props.modelValue) {
    radio.value?.setAttribute('checked', 'checked')
  }
})
</script>

<template>
  <div v-if="$props.label || $slots.label" class="form-control">
    <label class="label cursor-pointer gap-3">
      <input
        type="radio"
        ref="radio"
        :class="[
          'radio',
          {
            'radio-primary': $props.severity === 'primary',
            'radio-secondary': $props.severity === 'secondary',
            'radio-accent': $props.severity === 'accent',
            'radio-neutral': $props.severity === 'neutral',
            'radio-success': $props.severity === 'success',
            'radio-error': $props.severity === 'danger',
            'radio-warning': $props.severity === 'warning',
            'radio-info': $props.severity === 'info',
            'radio-xs': $props.size === 'xs',
            'radio-sm': $props.size === 'sm',
            'radio-md': $props.size === 'default',
            'radio-lg': $props.size === 'lg'
          }
        ]"
        :disabled="$props.disabled"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $props.value)"
      />
      <slot v-if="$slots.label" name="label" />
      <span v-else :class="['label-text', $props.labelClass]">{{ $props.label }}</span>
    </label>
  </div>
  <input
    v-else
    type="radio"
    ref="radio"
    :class="[
      'radio',
      {
        'radio-primary': $props.severity === 'primary',
        'radio-secondary': $props.severity === 'secondary',
        'radio-accent': $props.severity === 'accent',
        'radio-neutral': $props.severity === 'neutral',
        'radio-success': $props.severity === 'success',
        'radio-error': $props.severity === 'danger',
        'radio-warning': $props.severity === 'warning',
        'radio-info': $props.severity === 'info',
        'radio-xs': $props.size === 'xs',
        'radio-sm': $props.size === 'sm',
        'radio-md': $props.size === 'default',
        'radio-lg': $props.size === 'lg'
      }
    ]"
    :disabled="$props.disabled"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $props.value)"
  />
</template>

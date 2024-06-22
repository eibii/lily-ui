<script setup lang="ts">
import type { Severity, SizeBase } from '../@types/Props'

import { ref, watch, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    labelClass?: string
    disabled?: boolean
    size?: SizeBase
    severity?: Severity
  }>(),
  {
    modelValue: false,
    label: undefined,
    labelClass: '',
    disabled: false,
    size: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const fieldValue = ref()

watch(
  () => props.modelValue,
  (newValue) => {
    fieldValue.value = newValue
  }
)
watch(fieldValue, (newValue) => {
  emit('update:modelValue', newValue)
})

onMounted(() => {
  fieldValue.value = props.modelValue
})
</script>

<template>
  <div v-if="$props.label || $slots.label" class="form-control">
    <label class="label cursor-pointer gap-3">
      <input
        type="checkbox"
        v-model="fieldValue"
        :class="[
          'toggle',
          {
            'toggle-primary': $props.severity === 'primary',
            'toggle-secondary': $props.severity === 'secondary',
            'toggle-accent': $props.severity === 'accent',
            'toggle-neutral': $props.severity === 'neutral',
            'toggle-success': $props.severity === 'success',
            'toggle-error': $props.severity === 'danger',
            'toggle-warning': $props.severity === 'warning',
            'toggle-info': $props.severity === 'info',
            'toggle-xs': $props.size === 'xs',
            'toggle-sm': $props.size === 'sm',
            'toggle-md': $props.size === 'default',
            'toggle-lg': $props.size === 'lg'
          }
        ]"
        :disabled="$props.disabled"
        v-bind="$attrs"
      />
      <slot v-if="$slots.label" name="label" />
      <span v-else :class="['label-text', $props.labelClass]">{{ $props.label }}</span>
    </label>
  </div>
  <input
    v-else
    type="checkbox"
    v-model="fieldValue"
    :class="[
      'toggle',
      {
        'toggle-primary': $props.severity === 'primary',
        'toggle-secondary': $props.severity === 'secondary',
        'toggle-accent': $props.severity === 'accent',
        'toggle-neutral': $props.severity === 'neutral',
        'toggle-success': $props.severity === 'success',
        'toggle-error': $props.severity === 'danger',
        'toggle-warning': $props.severity === 'warning',
        'toggle-info': $props.severity === 'info',
        'toggle-xs': $props.size === 'xs',
        'toggle-sm': $props.size === 'sm',
        'toggle-md': $props.size === 'default',
        'toggle-lg': $props.size === 'lg'
      }
    ]"
    :disabled="$props.disabled"
    v-bind="$attrs"
  />
</template>

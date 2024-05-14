<script setup lang="ts">
type ModelValue = string | number

import { ref, watch, useAttrs } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: ModelValue): void
}>()
const props = withDefaults(
  defineProps<{
    bgClass?: string
    modelValue: ModelValue
    widthClass?: string
    label?: string
    icon?: string
    iconRight?: string
    disabled?: boolean
    loading?: boolean
    size?: 'xs' | 'sm' | 'default' | 'lg'
    shape?: 'default' | 'circle' | 'square'
    effect?: 'default' | 'glass' | 'ghost' | 'neutral' | 'link'
    severity?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
  }>(),
  {
    bgClass: 'bg-base-200',
    widthClass: 'w-full',
    label: '',
    icon: '',
    iconRight: '',
    disabled: false,
    loading: false,
    size: 'default',
    shape: 'default',
    effect: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const value = ref(props.modelValue)
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  let val: ModelValue = target.value
  if ($attrs.type === 'number') {
    val = Number(val)
  }
  emit('update:modelValue', val)
}

watch(
  () => props.modelValue,
  (newValue) => {
    value.value = newValue
  }
)
</script>

<template>
  <input
    v-model="value"
    :class="[
      'checkbox',
      $props.bgClass,
      $props.widthClass,
      {
        'input-xs': $props.size === 'xs',
        'input-sm': $props.size === 'sm',
        'input-md': $props.size === 'default',
        'input-lg': $props.size === 'lg',
        'input-primary': $props.severity === 'primary',
        'input-secondary': $props.severity === 'secondary',
        'input-accent': $props.severity === 'accent',
        'input-info': $props.severity === 'info',
        'input-success': $props.severity === 'success',
        'input-warning': $props.severity === 'warning',
        'input-error': $props.severity === 'danger',
        'input-ghost': $props.effect === 'ghost',
        'input-glass': $props.effect === 'glass',
        'input-neutral': $props.effect === 'neutral'
      }
    ]"
    :disabled="$props.disabled || $props.loading"
    v-bind="$attrs"
    type="checkbox"
    @input="onInput"
  />
</template>

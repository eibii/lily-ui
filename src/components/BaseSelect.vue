<script setup lang="ts">
import type { ShapeBase, SizeBase, EffectBase, Severity, Option } from '../@types/Props'

import { ref, watch, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: Option): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: Option
    bgClass?: string
    widthClass?: string
    icon?: string
    iconRight?: string
    pleaceholder?: string
    options: Option[]
    disabled?: boolean
    outline?: boolean
    loading?: boolean
    size?: SizeBase
    shape?: ShapeBase
    effect?: EffectBase
    severity?: Severity
  }>(),
  {
    modelValue: () => ({
      value: '',
      label: ''
    }),
    bgClass: 'bg-base-200',
    widthClass: 'w-full',
    icon: '',
    iconRight: '',
    pleaceholder: 'Select an option',
    options: () => [],
    disabled: false,
    outline: false,
    loading: false,
    size: 'default',
    shape: 'default',
    effect: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const select = ref()
const onInput = (e: Event) => {
  const value = (e.target as HTMLSelectElement).value
  const option = props.options.find((option) => option.value === value)

  if (option) {
    emit('update:modelValue', option)
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    select.value = newValue
  }
)

onMounted(() => {
  select.value = props.modelValue
})
</script>

<template>
  <label :class="['flex items-center gap-2', $props.widthClass]">
    <slot v-if="$slots.icon" name="icon" />
    <i v-else-if="$props.icon" :class="$props.icon" />
    <select
      v-model="select"
      :class="[
        'select w-full',
        $props.bgClass,
        {
          'select-bordered': $props.outline && $props.effect !== 'ghost',
          'select-xs': $props.size === 'xs',
          'select-sm': $props.size === 'sm',
          'select-md': $props.size === 'default',
          'select-lg': $props.size === 'lg',
          'select-primary': $props.severity === 'primary' && $props.effect !== 'ghost',
          'select-secondary': $props.severity === 'secondary' && $props.effect !== 'ghost',
          'select-accent': $props.severity === 'accent' && $props.effect !== 'ghost',
          'select-info': $props.severity === 'info' && $props.effect !== 'ghost',
          'select-success': $props.severity === 'success' && $props.effect !== 'ghost',
          'select-warning': $props.severity === 'warning' && $props.effect !== 'ghost',
          'select-error': $props.severity === 'danger' && $props.effect !== 'ghost',
          'select-neutral': $props.severity === 'neutral' && $props.effect !== 'ghost',
          'select-ghost': $props.effect === 'ghost',
          'select-glass': $props.effect === 'glass',
          'select-square': $props.shape === 'square'
        }
      ]"
      :disabled="$props.disabled"
      v-bind="$attrs"
      @input="onInput"
    >
      <option v-if="$props.pleaceholder" disabled value="pleaceholder">
        {{ $props.pleaceholder }}
      </option>
      <template v-for="option in $props.options" :key="option">
        <option :value="option.value">{{ option.label }}</option>
      </template>
    </select>
    <slot v-if="$slots.iconRight" name="iconRight" />
    <i v-else-if="$props.iconRight" :class="$props.iconRight" />
  </label>
</template>

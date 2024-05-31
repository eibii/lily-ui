<script setup lang="ts">
import type { ShapeBase, SizeBase, EffectBase, Severity } from '../@types/Props'
type ModelValue = string | number

import { ref, watch, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: ModelValue): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: ModelValue
    bgClass?: string
    widthClass?: string
    icon?: string
    iconRight?: string
    outline?: boolean
    disabled?: boolean
    loading?: boolean
    size?: SizeBase
    shape?: ShapeBase
    effect?: EffectBase
    severity?: Severity
  }>(),
  {
    modelValue: '',
    bgClass: 'bg-base-200',
    widthClass: 'w-full',
    icon: '',
    iconRight: '',
    outline: false,
    disabled: false,
    loading: false,
    size: 'default',
    shape: 'default',
    effect: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const value = ref()
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

onMounted(() => {
  value.value = props.modelValue
})
</script>

<template>
  <label
    :class="[
      'input flex items-center gap-2',
      $props.bgClass,
      $props.widthClass,
      {
        'input-bordered': $props.outline && $props.effect !== 'ghost',
        'input-xs': $props.size === 'xs',
        'input-sm': $props.size === 'sm',
        'input-md': $props.size === 'default',
        'input-lg': $props.size === 'lg',
        'input-primary': $props.severity === 'primary' && $props.effect !== 'ghost',
        'input-secondary': $props.severity === 'secondary' && $props.effect !== 'ghost',
        'input-accent': $props.severity === 'accent' && $props.effect !== 'ghost',
        'input-info': $props.severity === 'info' && $props.effect !== 'ghost',
        'input-success': $props.severity === 'success' && $props.effect !== 'ghost',
        'input-warning': $props.severity === 'warning' && $props.effect !== 'ghost',
        'input-error': $props.severity === 'danger' && $props.effect !== 'ghost',
        'input-neutral': $props.severity === 'neutral' && $props.effect !== 'ghost',
        'input-ghost': $props.effect === 'ghost',
        'input-glass': $props.effect === 'glass',
        'input-square': $props.shape === 'square'
      }
    ]"
  >
    <slot v-if="$slots.icon" name="icon" />
    <i v-else-if="$props.icon" :class="$props.icon" />
    <input
      v-model="value"
      class="grow"
      :disabled="$props.disabled || $props.loading"
      v-bind="$attrs"
      @input="onInput"
    />
    <slot v-if="$slots.iconRight" name="iconRight" />
    <i v-else-if="$props.iconRight" :class="$props.iconRight" />
  </label>
</template>

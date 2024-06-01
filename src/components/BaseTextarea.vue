<script setup lang="ts">
import type { ShapeBase, SizeBase, EffectBase, Severity } from '../@types/Props'

import { ref, watch, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: string
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
const textarea = ref()
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

watch(
  () => props.modelValue,
  (newValue) => {
    textarea.value = newValue
  }
)

onMounted(() => {
  textarea.value = props.modelValue
})
</script>

<template>
  <label :class="['flex items-center gap-2', $props.widthClass]">
    <slot v-if="$slots.icon" name="icon" />
    <i v-else-if="$props.icon" :class="$props.icon" />
    <textarea
      v-model="textarea"
      :class="[
        'textarea w-full',
        $props.bgClass,
        {
          'textarea-bordered': $props.outline && $props.effect !== 'ghost',
          'textarea-xs': $props.size === 'xs',
          'textarea-sm': $props.size === 'sm',
          'textarea-md': $props.size === 'default',
          'textarea-lg': $props.size === 'lg',
          'textarea-primary': $props.severity === 'primary' && $props.effect !== 'ghost',
          'textarea-secondary': $props.severity === 'secondary' && $props.effect !== 'ghost',
          'textarea-accent': $props.severity === 'accent' && $props.effect !== 'ghost',
          'textarea-info': $props.severity === 'info' && $props.effect !== 'ghost',
          'textarea-success': $props.severity === 'success' && $props.effect !== 'ghost',
          'textarea-warning': $props.severity === 'warning' && $props.effect !== 'ghost',
          'textarea-error': $props.severity === 'danger' && $props.effect !== 'ghost',
          'textarea-neutral': $props.severity === 'neutral' && $props.effect !== 'ghost',
          'textarea-ghost': $props.effect === 'ghost',
          'textarea-glass': $props.effect === 'glass',
          'textarea-square': $props.shape === 'square'
        }
      ]"
      :disabled="$props.disabled || $props.loading"
      v-bind="$attrs"
      @input="onInput"
    />
    <slot v-if="$slots.iconRight" name="iconRight" />
    <i v-else-if="$props.iconRight" :class="$props.iconRight" />
  </label>
</template>

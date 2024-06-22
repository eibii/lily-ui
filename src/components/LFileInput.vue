<script setup lang="ts">
import type { Severity, EffectGhost, SizeBase } from '../@types/Props'

import { useAttrs } from 'vue'

const emit = defineEmits<{
  (e: 'onFile', files: FileList): void
}>()
withDefaults(
  defineProps<{
    bgClass?: string
    widthClass?: string
    labelUp?: string
    labelUpAlt?: string
    labelDown?: string
    outline?: boolean
    disabled?: boolean
    size?: SizeBase
    effect?: EffectGhost
    severity?: Severity
  }>(),
  {
    bgClass: 'bg-base-200',
    widthClass: 'w-full',
    labelUp: undefined,
    labelUpAlt: undefined,
    labelDown: undefined,
    outline: false,
    disabled: false,
    size: 'default',
    effect: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = target.files

  if (files) {
    emit('onFile', files)
  }
}
</script>

<template>
  <div
    v-if="
      $props.labelUp || $props.labelUpAlt || $props.labelDown || $slots.labelUp || $slots.labelDown
    "
    :class="['form-control', $props.widthClass]"
  >
    <slot v-if="$slots.labelUp" name="labelUp" />
    <div v-else-if="$props.labelUp || $props.labelUpAlt" class="label">
      <span v-if="$props.labelUp" class="label-text">{{ $props.labelUp }}</span>
      <span v-if="$props.labelUpAlt" class="label-text-alt">{{ $props.labelUpAlt }}</span>
    </div>
    <input
      type="file"
      :class="[
        'file-input w-full',
        $props.bgClass,
        {
          'file-input-xs': $props.size === 'xs',
          'file-input-sm': $props.size === 'sm',
          'file-input-md': $props.size === 'default',
          'file-input-lg': $props.size === 'lg',
          'file-input-bordered': $props.outline && $props.effect !== 'ghost',
          'file-input-primary': $props.severity === 'primary' && $props.effect !== 'ghost',
          'file-input-secondary': $props.severity === 'secondary' && $props.effect !== 'ghost',
          'file-input-accent': $props.severity === 'accent' && $props.effect !== 'ghost',
          'file-input-success': $props.severity === 'success' && $props.effect !== 'ghost',
          'file-input-error': $props.severity === 'danger' && $props.effect !== 'ghost',
          'file-input-warning': $props.severity === 'warning' && $props.effect !== 'ghost',
          'file-input-info': $props.severity === 'info' && $props.effect !== 'ghost',
          'file-input-neutral': $props.severity === 'neutral' && $props.effect !== 'ghost',
          'file-input-ghost': $props.effect === 'ghost'
        }
      ]"
      :disabled="$props.disabled"
      v-bind="$attrs"
      @input="onInput"
    />
    <slot v-if="$slots.labelDown" name="labelDown" />
    <div v-else-if="$props.labelDown" class="label">
      <span class="label-text-alt">{{ $props.labelDown }}</span>
    </div>
  </div>
  <input
    v-else
    type="file"
    :class="[
      'file-input',
      $props.bgClass,
      $props.widthClass,
      {
        'file-input-xs': $props.size === 'xs',
        'file-input-sm': $props.size === 'sm',
        'file-input-md': $props.size === 'default',
        'file-input-lg': $props.size === 'lg',
        'file-input-bordered': $props.outline && $props.effect !== 'ghost',
        'file-input-primary': $props.severity === 'primary' && $props.effect !== 'ghost',
        'file-input-secondary': $props.severity === 'secondary' && $props.effect !== 'ghost',
        'file-input-accent': $props.severity === 'accent' && $props.effect !== 'ghost',
        'file-input-success': $props.severity === 'success' && $props.effect !== 'ghost',
        'file-input-error': $props.severity === 'danger' && $props.effect !== 'ghost',
        'file-input-warning': $props.severity === 'warning' && $props.effect !== 'ghost',
        'file-input-info': $props.severity === 'info' && $props.effect !== 'ghost',
        'file-input-neutral': $props.severity === 'neutral' && $props.effect !== 'ghost',
        'file-input-ghost': $props.effect === 'ghost'
      }
    ]"
    :disabled="$props.disabled"
    v-bind="$attrs"
    @input="onInput"
  />
</template>

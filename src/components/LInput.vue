<script setup lang="ts">
import type { ShapeBase, SizeBase, EffectBase, Severity } from '../@types/Props'
type ModelValue = string | number

import { ref, watch, useAttrs, onMounted } from 'vue'
import * as _ from 'lodash-es'

import BaseInput from './BaseInput.vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: ModelValue): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: ModelValue
    bgClass?: string
    widthClass?: string
    labelUp?: string
    labelUpAlt?: string
    labelDown?: string
    label?: string
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
    labelUp: undefined,
    labelUpAlt: undefined,
    labelDown: undefined,
    label: '',
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
  emit('update:modelValue', target.value)
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
    <BaseInput
      v-model="value"
      :disabled="$props.disabled || $props.loading"
      v-bind="{
        ..._.omit($props, ['modelValue', 'labelUp', 'labelUpAlt', 'labelDown', 'label']),
        ...$attrs
      }"
      @input="onInput"
    >
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template v-if="$slots.iconRight" #iconRight>
        <slot name="iconRight" />
      </template>
    </BaseInput>
    <slot v-if="$slots.labelDown" name="labelDown" />
    <div v-else-if="$props.labelDown" class="label">
      <span class="label-text-alt">{{ $props.labelDown }}</span>
    </div>
  </div>
  <BaseInput
    v-else
    v-model="value"
    :disabled="$props.disabled || $props.loading"
    v-bind="{
      ..._.omit($props, ['modelValue', 'labelUp', 'labelUpAlt', 'labelDown', 'label']),
      ...$attrs
    }"
    @input="onInput"
  >
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <template v-if="$slots.iconRight" #iconRight>
      <slot name="iconRight" />
    </template>
  </BaseInput>
</template>

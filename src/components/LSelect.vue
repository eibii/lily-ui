<script setup lang="ts">
import type { SizeBase, ShapeBase, EffectGhost, Severity, Option } from '../@types/Props'

import { ref, useAttrs, onMounted, watch } from 'vue'
import * as _ from 'lodash-es'

import BaseSelect from './BaseSelect.vue'

defineEmits<{
  (e: 'update:modelValue', modelValue: Option): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: Option
    bgClass?: string
    widthClass?: string
    labelUp?: string
    labelUpAlt?: string
    labelDown?: string
    pleaceholder?: string
    options: Option[]
    disabled?: boolean
    outline?: boolean
    loading?: boolean
    size?: SizeBase
    shape?: ShapeBase
    effect?: EffectGhost
    severity?: Severity
  }>(),
  {
    bgClass: 'bg-base-200',
    widthClass: 'w-full',
    modelValue: undefined,
    labelUp: undefined,
    labelUpAlt: undefined,
    labelDown: undefined,
    pleaceholder: 'Select an option',
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
const setSelect = (option: Option | undefined) => {
  if (option && !_.isUndefined(option.value) && !_.isEmpty(option.value)) {
    select.value = `${option.value}`
  } else if (_.isUndefined(option)) {
    select.value = option
  }
}

watch(
  () => props.modelValue,
  (newValue) => {
    setSelect(newValue)
  }
)

onMounted(() => {
  setSelect(props.modelValue)
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
    <BaseSelect
      v-model="select"
      :disabled="$props.disabled || $props.loading"
      :options="$props.options"
      v-bind="{
        ..._.omit($props, ['modelValue', 'options', 'labelUp', 'labelUpAlt', 'labelDown', 'label']),
        ...$attrs
      }"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <template v-if="$slots.iconRight" #iconRight>
        <slot name="iconRight" />
      </template>
    </BaseSelect>
    <slot v-if="$slots.labelDown" name="labelDown" />
    <div v-else-if="$props.labelDown" class="label">
      <span class="label-text-alt">{{ $props.labelDown }}</span>
    </div>
  </div>
  <BaseSelect
    v-else
    v-model="select"
    :disabled="$props.disabled || $props.loading"
    :options="$props.options"
    v-bind="{
      ..._.omit($props, ['modelValue', 'options', 'labelUp', 'labelUpAlt', 'labelDown', 'label']),
      ...$attrs
    }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template v-if="$slots.icon" #icon>
      <slot name="icon" />
    </template>
    <template v-if="$slots.iconRight" #iconRight>
      <slot name="iconRight" />
    </template>
  </BaseSelect>
</template>

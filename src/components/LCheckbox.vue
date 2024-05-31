<script setup lang="ts">
import type { Severity, SizeBase } from '@/@types/Props'
type ModelValue = any[] | boolean

import { ref, watch, useAttrs, onMounted } from 'vue'
import * as _ from 'lodash-es'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: ModelValue): void
}>()
const props = withDefaults(
  defineProps<{
    label?: string
    labelClass?: string
    modelValue?: ModelValue
    value?: any
    disabled?: boolean
    size?: SizeBase
    severity?: Severity
  }>(),
  {
    label: undefined,
    labelClass: '',
    modelValue: false,
    value: true,
    disabled: false,
    size: 'default',
    severity: 'default'
  }
)
const $attrs = useAttrs()
const fieldValue = ref()
const checkValue = ref()
const flag = ref(true)

watch(fieldValue, (newValue) => {
  if (flag.value) {
    const isBinary = _.isBoolean(props.value)

    if (isBinary) {
      emit('update:modelValue', newValue)
    } else {
      const modelValue = props.modelValue as any[]

      if (newValue) {
        const newModelValue = [...modelValue, props.value]
        checkValue.value = props.value
        emit('update:modelValue', newModelValue)
      } else {
        emit(
          'update:modelValue',
          modelValue.filter((v) => v !== checkValue.value)
        )
        checkValue.value = undefined
      }
    }
  }

  flag.value = true
})

onMounted(() => {
  const isBinary = _.isBoolean(props.value)
  flag.value = false

  if (isBinary) {
    fieldValue.value = props.modelValue === props.value
  } else {
    const modelValue = props.modelValue as any[]
    const key = modelValue.find((v) => v === props.value)

    if (key) {
      checkValue.value = props.value
    }

    fieldValue.value = key ? true : false
  }
})
</script>

<template>
  <div v-if="$props.label || $slots.label" class="form-control">
    <label class="label cursor-pointer gap-3">
      <input
        type="checkbox"
        v-model="fieldValue"
        :class="[
          'checkbox',
          {
            'checkbox-primary': $props.severity === 'primary',
            'checkbox-secondary': $props.severity === 'secondary',
            'checkbox-accent': $props.severity === 'accent',
            'checkbox-neutral': $props.severity === 'neutral',
            'checkbox-success': $props.severity === 'success',
            'checkbox-error': $props.severity === 'danger',
            'checkbox-warning': $props.severity === 'warning',
            'checkbox-info': $props.severity === 'info',
            'checkbox-xs': $props.size === 'xs',
            'checkbox-sm': $props.size === 'sm',
            'checkbox-md': $props.size === 'default',
            'checkbox-lg': $props.size === 'lg'
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
      'checkbox',
      {
        'checkbox-primary': $props.severity === 'primary',
        'checkbox-secondary': $props.severity === 'secondary',
        'checkbox-accent': $props.severity === 'accent',
        'checkbox-neutral': $props.severity === 'neutral',
        'checkbox-success': $props.severity === 'success',
        'checkbox-error': $props.severity === 'danger',
        'checkbox-warning': $props.severity === 'warning',
        'checkbox-info': $props.severity === 'info',
        'checkbox-xs': $props.size === 'xs',
        'checkbox-sm': $props.size === 'sm',
        'checkbox-md': $props.size === 'default',
        'checkbox-lg': $props.size === 'lg'
      }
    ]"
    :disabled="$props.disabled"
    v-bind="$attrs"
  />
</template>

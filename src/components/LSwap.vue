<script setup lang="ts">
import type { Effect, ShapeBase, Severity, AnimateBase } from '../@types/Props'

import { ref, watch } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', model: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
    onIcon?: string
    offIcon?: string
    onText?: string
    offText?: string
    btn?: boolean
    shape?: ShapeBase
    effect?: Effect
    severity?: Severity
    animate?: AnimateBase
  }>(),
  {
    disabled: false,
    onIcon: '',
    offIcon: '',
    onText: 'ON',
    offText: 'OFF',
    btn: false,
    shape: 'default',
    effect: 'default',
    Severity: 'default',
    animate: 'default'
  }
)
const check = ref(props.modelValue)

watch(
  () => props.modelValue,
  (value) => {
    check.value = value
  }
)
watch(check, (value) => {
  if (!props.disabled) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <label
    :disabled="$props.disabled"
    :class="[
      'swap',
      {
        btn: $props.btn,
        'btn-circle': $props.shape === 'circle',
        'btn-square': $props.shape === 'square',
        'btn-ghost': $props.effect === 'ghost',
        'btn-glass': $props.effect === 'glass',
        'btn-link': $props.effect === 'link',
        'btn-primary': $props.severity === 'primary',
        'btn-secondary': $props.severity === 'secondary',
        'btn-accent': $props.severity === 'accent',
        'btn-info': $props.severity === 'info',
        'btn-success': $props.severity === 'success',
        'btn-warning': $props.severity === 'warning',
        'btn-error': $props.severity === 'danger',
        'btn-neutral': $props.severity === 'neutral',
        'swap-rotate': $props.animate === 'rotate',
        'swap-flip': $props.animate === 'flip'
      }
    ]"
  >
    <input v-if="!$props.disabled" v-model="check" type="checkbox" />
    <div class="swap-on">
      <i v-if="$props.onIcon" :class="$props.onIcon" />
      {{ $props.onIcon ? '' : $props.onText }}
    </div>
    <div class="swap-off">
      <i v-if="$props.offIcon" :class="$props.offIcon" />
      {{ $props.offIcon ? '' : $props.offText }}
    </div>
  </label>
</template>

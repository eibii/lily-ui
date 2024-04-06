<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
    onIcon?: string
    offIcon?: string
    onText?: string
    offText?: string
    btn?: boolean
    shape?: 'default' | 'circle' | 'square'
    effect?: 'default' | 'glass' | 'ghost' | 'neutral' | 'link'
    animate?: 'default' | 'rotate' | 'flip'
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
        'btn-neutral': $props.effect === 'neutral',
        'btn-link': $props.effect === 'link',
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

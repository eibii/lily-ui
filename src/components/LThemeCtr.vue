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
  <input v-model="check" type="checkbox" value="light" class="toggle theme-controller" />
</template>

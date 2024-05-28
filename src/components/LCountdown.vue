<script setup lang="ts">
import type { AnimationCount } from '../@types/Props'

import { onMounted, ref, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'

import { LCountdownNumber } from '.'

const emit = defineEmits<{
  (e: 'onComplete', status: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    widthClass?: string
    value: number
    delay?: number
    animation?: AnimationCount
  }>(),
  {
    widthClass: 'w-20',
    delay: 1000,
    animation: 'default'
  }
)
const count = ref(props.value)
const bootStrap = () => {
  const { pause } = useIntervalFn(() => {
    if (count.value > 0) {
      --count.value
    } else {
      emit('onComplete', true)
      pause()
    }
  }, props.delay)
}

watch(
  () => props.value,
  (val) => {
    count.value = val
  }
)

onMounted(() => bootStrap())
</script>

<template>
  <LCountdownNumber
    class="countdown-number text-6xl font-mono"
    :animation="$props.animation"
    :value="count"
    :number-digits="$props.value.toString().length"
    :width-class="$props.widthClass"
  />
</template>

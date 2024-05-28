<script setup lang="ts">
import type { AnimationCount } from '../@types/Props'

import { computed } from 'vue'
import * as _ from 'lodash-es'

const props = withDefaults(
  defineProps<{
    value: number
    numberDigits?: number
    widthClass?: string
    animation?: AnimationCount
  }>(),
  {
    numberDigits: 1,
    widthClass: 'w-6',
    animation: 'default'
  }
)
const maskNumber = computed(() => {
  return _.padStart(`${props.value}`, props.numberDigits, '0').split('')
})
const animatesIn = {
  default: 'animate-fade-down',
  jump: 'animate-jump animate-ease-in',
  flip: 'animate-flip-down animate-ease-in',
  fade: 'animate-fade animate-ease-in'
}
const animatesOut = {
  default: 'animate-fade-up animate-reverse',
  jump: 'animate-jump animate-reverse animate-ease-out',
  flip: 'animate-flip-up animate-reverse animate-ease-out',
  fade: 'animate-fade animate-reverse animate-ease-out'
}
const animateIn = computed(() => animatesIn[props.animation])
const animateOut = computed(() => animatesOut[props.animation])
</script>

<template>
  <div :class="['flex justify-center', $props.widthClass]">
    <template v-for="i in numberDigits" :key="i">
      <Transition
        mode="out-in"
        :enter-to-class="`animate-duration-150 ${animateIn}`"
        :leave-to-class="`animate-duration-150 ${animateOut}`"
      >
        <div :key="maskNumber[i - 1]">
          {{ maskNumber[i - 1] }}
        </div>
      </Transition>
    </template>
  </div>
</template>

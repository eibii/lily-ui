<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    value: number
    numberDigits?: number
    widthClass?: string
  }>(),
  {
    numberDigits: 1,
    widthClass: 'w-6'
  }
)
const maskNumber = computed(() => {
  let mask = '0'

  for (let i = 2; i < props.numberDigits; i++) {
    mask += '0'
  }

  const strNumber =
    props.numberDigits > 1 && props.value <= 9 ? `${mask}${props.value}` : props.value.toString()

  return strNumber.split('')
})
</script>

<template>
  <div :class="['flex justify-center', $props.widthClass]">
    <template v-for="i in numberDigits" :key="i">
      <Transition
        mode="out-in"
        enter-to-class="animate-duration-150 animate-fade-down"
        leave-to-class="animate-duration-150 animate-fade-up animate-reverse"
      >
        <div :key="maskNumber[i - 1]">
          {{ maskNumber[i - 1] }}
        </div>
      </Transition>
    </template>
  </div>
</template>

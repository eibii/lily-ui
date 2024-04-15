<script setup lang="ts">
import { onMounted, ref, reactive, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'

import { LCountdownNumber } from '.'

const props = withDefaults(
  defineProps<{
    hours?: number
    minutes?: number
    seconds?: number
    delay?: number
    restart?: boolean
  }>(),
  {
    hours: 0,
    minutes: 0,
    seconds: 0,
    number: 59,
    delay: 1000,
    restart: true
  }
)
const count = ref(props.number)
const values = reactive({
  hours: props.hours,
  minutes: props.minutes,
  seconds: props.seconds
})
const bootStrap = () => {
  let totalSeconds = props.hours * 60 * 60 + props.minutes * 60 + props.seconds

  const { pause } = useIntervalFn(() => {
    if (totalSeconds > 0) {
      --values.seconds

      if (values.minutes >= 0 && values.seconds < 0) {
        values.seconds = 59
        --values.minutes
      }

      if (values.hours >= 0 && values.minutes < 0) {
        values.minutes = 59
        --values.hours
      }

      --totalSeconds
    } else {
      pause()
    }
  }, props.delay)
}

watch(
  () => props.number,
  () => {
    count.value = props.number
  }
)

onMounted(() => bootStrap())
</script>

<template>
  <span class="flex text-6xl">
    <LCountdownNumber :value="values.hours" :number-digits="2" width-class="w-20" />
    <div class="mr-2">:</div>
    <LCountdownNumber :value="values.minutes" :number-digits="2" width-class="w-20" />
    <div class="mr-2">:</div>
    <LCountdownNumber :value="values.seconds" :number-digits="2" width-class="w-20" />
  </span>
</template>

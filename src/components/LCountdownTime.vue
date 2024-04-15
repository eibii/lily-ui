<script setup lang="ts">
import { onMounted, reactive, watch } from 'vue'
import { useIntervalFn } from '@vueuse/core'

import { LCountdownNumber } from '.'

const emit = defineEmits(['onComplete'])
const props = withDefaults(
  defineProps<{
    days?: number
    hours?: number
    minutes?: number
    seconds: number
    delay?: number
    textDays?: string
    textHours?: string
    textMinutes?: string
    textSeconds?: string
    layout?: 'boxes' | 'default'
  }>(),
  {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    delay: 1000,
    textDays: 'days',
    textHours: 'hours',
    textMinutes: 'min',
    textSeconds: 'sec',
    layout: 'default'
  }
)
const values = reactive({
  days: props.days || 0,
  hours: props.hours || 0,
  minutes: props.minutes || 0,
  seconds: props.seconds,
  totalSeconds: 0
})
const bootStrap = () => {
  let days = props.days || 0
  days = days * 24 * 60 * 60
  let hours = props.hours || 0
  hours = hours * 60 * 60
  let minutes = props.minutes || 0
  minutes = minutes * 60
  values.totalSeconds = days + hours + minutes + props.seconds

  const { pause } = useIntervalFn(() => {
    if (values.totalSeconds > 0) {
      --values.seconds

      if (values.minutes >= 0 && values.seconds < 0) {
        values.seconds = 59
        --values.minutes
      }

      if (values.hours >= 0 && values.minutes < 0) {
        values.minutes = 59
        --values.hours
      }

      if (values.days >= 0 && values.hours < 0) {
        values.hours = 23
        --values.days
      }

      --values.totalSeconds
    } else {
      emit('onComplete')
      pause()
    }
  }, props.delay)
}

watch(
  () => ({
    hours: props.hours,
    minutes: props.minutes,
    seconds: props.seconds
  }),
  () => {
    bootStrap()
  }
)

onMounted(() => bootStrap())
</script>

<template>
  <div v-if="$props.layout === 'boxes'" class="grid grid-flow-col gap-5 text-center auto-cols-max">
    <div
      :class="[
        'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
        {
          'text-neutral-content': values.totalSeconds > 4,
          'text-red-100': values.totalSeconds === 4,
          'text-red-200': values.totalSeconds === 3,
          'text-red-300': values.totalSeconds === 2,
          'text-red-400': values.totalSeconds === 1,
          'text-red-500': values.totalSeconds === 0
        }
      ]"
    >
      <span class="font-mono text-5xl px-3">
        <LCountdownNumber :value="values.days" width-class="w-8" />
      </span>
      {{ props.textDays }}
    </div>
    <div
      :class="[
        'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
        {
          'text-neutral-content': values.totalSeconds > 4,
          'text-red-100': values.totalSeconds === 4,
          'text-red-200': values.totalSeconds === 3,
          'text-red-300': values.totalSeconds === 2,
          'text-red-400': values.totalSeconds === 1,
          'text-red-500': values.totalSeconds === 0
        }
      ]"
    >
      <span class="font-mono text-5xl px-3">
        <LCountdownNumber :value="values.hours" :number-digits="2" width-class="w-8" />
      </span>
      {{ props.textHours }}
    </div>
    <div
      :class="[
        'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
        {
          'text-neutral-content': values.totalSeconds > 4,
          'text-red-100': values.totalSeconds === 4,
          'text-red-200': values.totalSeconds === 3,
          'text-red-300': values.totalSeconds === 2,
          'text-red-400': values.totalSeconds === 1,
          'text-red-500': values.totalSeconds === 0
        }
      ]"
    >
      <span class="font-mono text-5xl px-3">
        <LCountdownNumber :value="values.minutes" :number-digits="2" width-class="w-8" />
      </span>
      {{ props.textMinutes }}
    </div>
    <div
      :class="[
        'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
        {
          'text-neutral-content': values.totalSeconds > 4,
          'text-red-100': values.totalSeconds === 4,
          'text-red-200': values.totalSeconds === 3,
          'text-red-300': values.totalSeconds === 2,
          'text-red-400': values.totalSeconds === 1,
          'text-red-500': values.totalSeconds === 0
        }
      ]"
    >
      <span class="font-mono text-5xl px-3">
        <LCountdownNumber :value="values.seconds" :number-digits="2" width-class="w-8" />
      </span>
      {{ props.textSeconds }}
    </div>
  </div>
  <div v-else class="flex text-6xl">
    <LCountdownNumber :value="values.days" width-class="w-8" />
    <svg
      class="h-14 self-end fill-current"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
      ></path>
    </svg>
    <LCountdownNumber :value="values.hours" :number-digits="2" width-class="w-20" />
    <svg
      class="h-14 self-end fill-current"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
      ></path>
    </svg>
    <LCountdownNumber :value="values.minutes" :number-digits="2" width-class="w-20" />
    <div class="flex self-center"></div>
    <svg
      class="h-14 self-end fill-current"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
      ></path>
    </svg>
    <LCountdownNumber :value="values.seconds" :number-digits="2" width-class="w-20" />
  </div>
</template>

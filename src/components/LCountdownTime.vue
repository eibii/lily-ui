<script setup lang="ts">
import { onMounted, reactive, watch, computed } from 'vue'
import { useIntervalFn } from '@vueuse/core'

import { LCountdownNumber } from '.'

const emit = defineEmits<{
  (e: 'onComplete', status: boolean): void
}>()
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
    layout?: 'boxes' | 'default' | 'labelsUnder'
    animation?: 'default' | 'jump' | 'flip' | 'fade'
  }>(),
  {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    delay: 1000,
    textDays: '',
    textHours: '',
    textMinutes: '',
    textSeconds: '',
    layout: 'default',
    animation: 'default'
  }
)
const values = reactive({
  days: props.days || 0,
  hours: props.hours || 0,
  minutes: props.minutes || 0,
  seconds: props.seconds,
  totalSeconds: 0
})
const textColors = computed(() => {
  return {
    'text-neutral-content': values.totalSeconds > 4,
    'text-red-100': values.totalSeconds === 4,
    'text-red-200': values.totalSeconds === 3,
    'text-red-300': values.totalSeconds === 2,
    'text-red-400': values.totalSeconds === 1,
    'text-red-500': values.totalSeconds === 0
  }
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
      emit('onComplete', true)
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
  <div class="countdown-time">
    <div
      v-if="$props.layout === 'boxes'"
      class="grid grid-flow-col gap-5 text-center auto-cols-max"
    >
      <!-- Days -->
      <div
        v-if="$props.days"
        :class="[
          'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
          textColors
        ]"
      >
        <span class="font-mono text-5xl px-3">
          <LCountdownNumber :animation="$props.animation" :value="values.days" width-class="w-8" />
        </span>
        {{ props.textDays }}
      </div>
      <!-- Hours -->
      <div
        v-if="$props.hours"
        :class="[
          'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
          textColors
        ]"
      >
        <span class="font-mono text-5xl px-3">
          <LCountdownNumber
            :animation="$props.animation"
            :value="values.hours"
            :number-digits="2"
            width-class="w-8"
          />
        </span>
        {{ props.textHours }}
      </div>
      <!-- Minutes -->
      <div
        v-if="$props.minutes"
        :class="[
          'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
          textColors
        ]"
      >
        <span class="font-mono text-5xl px-3">
          <LCountdownNumber
            :animation="$props.animation"
            :value="values.minutes"
            :number-digits="2"
            width-class="w-8"
          />
        </span>
        {{ props.textMinutes }}
      </div>
      <!-- Seconds -->
      <div
        :class="[
          'flex flex-col p-2 bg-neutral rounded-box transition-all duration-300 ease-in-out',
          textColors
        ]"
      >
        <span class="font-mono text-5xl px-3">
          <LCountdownNumber
            :animation="$props.animation"
            :value="values.seconds"
            :number-digits="2"
            width-class="w-8"
          />
        </span>
        {{ props.textSeconds }}
      </div>
    </div>
    <div v-else class="flex text-6xl gap-2 font-mono">
      <!-- Days -->
      <div
        v-if="$props.days"
        :class="[
          'flex gap-1',
          {
            'flex-col': $props.layout === 'labelsUnder'
          }
        ]"
      >
        <LCountdownNumber :animation="$props.animation" :value="values.days" width-class="w-10" />
        <div
          v-if="$props.textDays"
          :class="[
            'text-xl',
            {
              'self-end': $props.layout !== 'labelsUnder',
              'self-center': $props.layout === 'labelsUnder'
            }
          ]"
        >
          {{ $props.textDays }}
        </div>
      </div>
      <svg
        v-if="$props.days && !$props.textDays"
        class="h-14 self-end fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
        ></path>
      </svg>
      <!-- Hours -->
      <div
        v-if="$props.hours"
        :class="[
          'flex gap-1',
          {
            'flex-col': $props.layout === 'labelsUnder'
          }
        ]"
      >
        <LCountdownNumber
          :animation="$props.animation"
          :value="values.hours"
          :number-digits="2"
          width-class="w-20"
        />
        <div
          v-if="$props.textHours"
          :class="[
            'text-xl',
            {
              'self-end': $props.layout !== 'labelsUnder',
              'self-center': $props.layout === 'labelsUnder'
            }
          ]"
        >
          {{ $props.textHours }}
        </div>
      </div>
      <svg
        v-if="$props.hours && !$props.textHours"
        class="h-14 self-end fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
        ></path>
      </svg>
      <!-- Minutes -->
      <div
        v-if="$props.minutes"
        :class="[
          'flex gap-1',
          {
            'flex-col': $props.layout === 'labelsUnder'
          }
        ]"
      >
        <LCountdownNumber
          :animation="$props.animation"
          :value="values.minutes"
          :number-digits="2"
          width-class="w-20"
        />
        <div
          v-if="$props.textMinutes"
          :class="[
            'text-xl',
            {
              'self-end': $props.layout !== 'labelsUnder',
              'self-center': $props.layout === 'labelsUnder'
            }
          ]"
        >
          {{ $props.textMinutes }}
        </div>
      </div>
      <svg
        v-if="$props.minutes && !$props.textMinutes"
        class="h-14 self-end fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 647c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z m0-386c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z"
        ></path>
      </svg>
      <!-- Seconds -->
      <div
        :class="[
          'flex gap-1',
          {
            'flex-col': $props.layout === 'labelsUnder'
          }
        ]"
      >
        <LCountdownNumber
          :animation="$props.animation"
          :value="values.seconds"
          :number-digits="2"
          width-class="w-20"
        />
        <div
          v-if="$props.textSeconds"
          :class="[
            'text-xl',
            {
              'self-end': $props.layout !== 'labelsUnder',
              'self-center': $props.layout === 'labelsUnder'
            }
          ]"
        >
          {{ $props.textSeconds }}
        </div>
      </div>
    </div>
  </div>
</template>

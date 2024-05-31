<script setup lang="ts">
import type { SizeBase, RatingIcon } from '@/@types/Props'

import { ref, useAttrs, watch, onBeforeMount } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()
const props = withDefaults(
  defineProps<{
    bgClass?: string
    modelValue?: number
    name?: string
    stars?: number
    icon?: RatingIcon
    disabled?: boolean
    half?: boolean
    size?: SizeBase
  }>(),
  {
    bgClass: 'bg-orange-400',
    modelValue: 0,
    name: 'rating',
    stars: 5,
    icon: 'default',
    disabled: false,
    half: false,
    size: 'default'
  }
)
const $attrs = useAttrs()
const rating = ref(0)
const count = ref(0)
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', +target.value)
}

watch(
  () => props.modelValue,
  (newValue) => {
    rating.value = newValue
  }
)

onBeforeMount(() => {
  if (props.half) {
    if (props.modelValue === 0) {
      rating.value = 0.5
    }

    count.value = props.stars * 2
  } else {
    if (props.modelValue === 0) {
      rating.value = 1
    }

    count.value = props.stars
  }
})
</script>

<template>
  <div
    :class="[
      'rating',
      {
        'rating-half': $props.half,
        'rating-xs': $props.size === 'xs',
        'rating-sm': $props.size === 'sm',
        'rating-md': $props.size === 'default',
        'rating-lg': $props.size === 'lg'
      }
    ]"
  >
    <template v-for="i in count" :key="i">
      <input
        type="radio"
        :class="[
          'mask',
          $props.bgClass,
          {
            'mask-star': $props.icon === 'default',
            'mask-heart': $props.icon === 'heart',
            'mask-half-1': $props.half && i % 2 === 1,
            'mask-half-2': $props.half && i % 2 === 0
          }
        ]"
        :name="`${$props.name} - ${i}`"
        :value="$props.half ? i / 2 : i"
        :checked="$props.half ? rating === i / 2 : rating === i"
        :disabled="props.disabled"
        v-bind="$attrs"
        @input="onInput"
      />
    </template>
  </div>
</template>

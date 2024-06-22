<script setup lang="ts">
import type { ShapeImage } from '../@types/Props'

import { useAttrs } from 'vue'

withDefaults(
  defineProps<{
    shape?: ShapeImage
  }>(),
  {
    shape: 'default'
  }
)
const $attrs = useAttrs()
</script>

<template>
  <img
    :class="[
      'mask',
      {
        'mask-square': $props.shape === 'default',
        'mask-squircle': $props.shape === 'squircle',
        'mask-heart': $props.shape === 'heart',
        'mask-hexagon': $props.shape === 'hexagon',
        'mask-hexagon-2': $props.shape === 'hexagon2',
        'mask-decagon': $props.shape === 'decagon',
        'mask-pentagon': $props.shape === 'pentagon',
        'mask-diamond': $props.shape === 'diamond',
        'mask-circle': $props.shape === 'circle',
        'mask-parallelogram': $props.shape === 'parallelogram',
        'mask-parallelogram-2': $props.shape === 'parallelogram2',
        'mask-parallelogram-3': $props.shape === 'parallelogram3',
        'mask-parallelogram-4': $props.shape === 'parallelogram4',
        'mask-star': $props.shape === 'star',
        'mask-star-2': $props.shape === 'star2',
        'mask-triangle': $props.shape === 'triangle',
        'mask-triangle-2': $props.shape === 'triangle2',
        'mask-triangle-3': $props.shape === 'triangle3',
        'mask-triangle-4': $props.shape === 'triangle4'
      }
    ]"
    v-bind="$attrs"
  />
</template>

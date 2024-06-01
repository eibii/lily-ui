<script setup lang="ts">
import type { SizeArtboard } from '../@types/Props'

import * as _ from 'lodash-es'

withDefaults(
  defineProps<{
    bgClass?: string
    size?: SizeArtboard
    horizontal?: boolean
  }>(),
  {
    bgClass: 'artboard-demo',
    size: 'phone1',
    horizontal: false
  }
)

const sizes: {
  [key in SizeArtboard]: string[]
} = {
  phone1: ['320', '568'],
  phone2: ['375', '667'],
  phone3: ['414', '736'],
  phone4: ['375', '812'],
  phone5: ['414', '896'],
  phone6: ['320', '1024']
}
</script>

<template>
  <div
    :class="[
      'artboard',
      $props.bgClass,
      {
        'artboard-horizontal': $props.horizontal,
        'phone-1': $props.size === 'phone1',
        'phone-2': $props.size === 'phone2',
        'phone-3': $props.size === 'phone3',
        'phone-4': $props.size === 'phone4',
        'phone-5': $props.size === 'phone5',
        'phone-6': $props.size === 'phone6'
      }
    ]"
  >
    {{
      $props.horizontal
        ? _.join(_.reverse(sizes[$props.size as SizeArtboard]), 'x')
        : _.join(sizes[$props.size as SizeArtboard], 'x')
    }}
  </div>
</template>

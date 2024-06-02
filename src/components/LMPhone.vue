<script setup lang="ts">
import type { SizeArtboard } from '../@types/Props'

import { LArtboard } from '.'

withDefaults(
  defineProps<{
    bgClass?: string
    size?: SizeArtboard
    screenSize?: boolean
  }>(),
  {
    bgClass: undefined,
    size: 'phone1',
    screenSize: undefined
  }
)
</script>

<template>
  <div class="mockup-phone">
    <div class="camera"></div>
    <div class="display">
      <LArtboard v-bind="$props">
        <slot />
      </LArtboard>
    </div>
  </div>
</template>

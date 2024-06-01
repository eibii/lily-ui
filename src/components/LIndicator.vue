<script setup lang="ts">
import type { SizeBase, Severity, EffectBase, PositionBase } from '../@types/Props'

import * as _ from 'lodash-es'

import { LBadge } from './'

withDefaults(
  defineProps<{
    textBadge?: string
    noBadge?: boolean
    size?: SizeBase
    effect?: EffectBase
    severity?: Severity
    outline?: boolean
    position?: PositionBase
  }>(),
  {
    textBadge: '',
    noBadge: false,
    size: 'default',
    effect: 'default',
    severity: 'default',
    outline: false,
    position: 'default'
  }
)
</script>

<template>
  <div class="indicator">
    <span v-if="$slots.indicatorItemTopLeft" class="indicator-item indicator-top indicator-start"
      ><slot name="indicatorItemTopLeft"
    /></span>
    <span v-if="$slots.indicatorItemTopCenter" class="indicator-item indicator-top indicator-center"
      ><slot name="indicatorItemTopCenter"
    /></span>
    <span v-if="$slots.indicatorItemTopRight" class="indicator-item indicator-top indicator-end"
      ><slot name="indicatorItemTopRight"
    /></span>
    <span
      v-if="$slots.indicatorItemMiddleLeft"
      class="indicator-item indicator-middle indicator-start"
      ><slot name="indicatorItemMiddleLeft"
    /></span>
    <span
      v-if="$slots.indicatorItemMiddleCenter"
      class="indicator-item indicator-middle indicator-center"
      ><slot name="indicatorItemMiddleCenter"
    /></span>
    <span
      v-if="$slots.indicatorItemMiddleRight"
      class="indicator-item indicator-middle indicator-end"
      ><slot name="indicatorItemMiddleRight"
    /></span>
    <span
      v-if="$slots.indicatorItemBottomLeft"
      class="indicator-item indicator-bottom indicator-start"
      ><slot name="indicatorItemBottomLeft"
    /></span>
    <span
      v-if="$slots.indicatorItemBottomCenter"
      class="indicator-item indicator-bottom indicator-center"
      ><slot name="indicatorItemBottomCenter"
    /></span>
    <span
      v-if="$slots.indicatorItemBottomRight"
      class="indicator-item indicator-bottom indicator-end"
      ><slot name="indicatorItemBottomRight"
    /></span>
    <div
      :class="[
        'indicator-item',
        {
          'indicator-top indicator-start': $props.position === 'top-left',
          'indicator-top indicator-center': $props.position === 'top-center',
          'indicator-top indicator-end': $props.position === 'top-right',
          'indicator-middle indicator-start': $props.position === 'middle-left',
          'indicator-middle indicator-center': $props.position === 'middle-center',
          'indicator-middle indicator-end': $props.position === 'middle-right',
          'indicator-bottom indicator-start': $props.position === 'bottom-left',
          'indicator-bottom indicator-center': $props.position === 'bottom-center',
          'indicator-bottom indicator-end': $props.position === 'bottom-right'
        }
      ]"
    >
      <slot v-if="$slots.indicatorItem" name="indicatorItem" />
      <LBadge v-else-if="!$props.noBadge" v-bind="{ ..._.omit($props, ['textBadge', 'position']) }">
        {{ $props.textBadge }}
      </LBadge>
    </div>
    <slot />
  </div>
</template>

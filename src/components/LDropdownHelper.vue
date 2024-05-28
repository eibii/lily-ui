<script setup lang="ts">
import type { SizeBase, AlignDropdown, PositionDropdown, ShapeBase } from '../@types/Props'

withDefaults(
  defineProps<{
    widthClass?: string
    size?: SizeBase
    open?: boolean
    hover?: boolean
    position?: PositionDropdown
    shape?: ShapeBase
    align?: AlignDropdown
    iconColor?: string
    cardClass?: string
    cardBg?: string
    cardColor?: string
  }>(),
  {
    widthClass: 'w-64',
    size: 'default',
    open: false,
    hover: false,
    position: 'default',
    shape: 'default',
    align: 'default',
    iconColor: 'text-info',
    cardClass: '',
    cardBg: 'bg-base-100',
    cardColor: ''
  }
)
</script>

<template>
  <div
    :class="[
      'dropdown',
      $props.position,
      $props.align,
      {
        'dropdown-end': $props.position === 'default',
        'dropdown-hover': $props.hover,
        'dropdown-open': $props.open
      }
    ]"
  >
    <div
      tabindex="0"
      role="button"
      :class="[
        'btn btn-ghost',
        $props.iconColor,
        {
          'btn-xs': $props.size === 'xs',
          'btn-sm': $props.size === 'sm',
          'btn-md': $props.size === 'default',
          'btn-lg': $props.size === 'lg',
          'btn-circle': $props.shape === 'circle' || $props.shape === 'default',
          'btn-square': $props.shape === 'square'
        }
      ]"
    >
      <svg
        tabindex="0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-4 h-4 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div
      tabindex="0"
      :class="[
        'dropdown-content z-[1] card card-compact rounded-box shadow',
        $props.widthClass,
        $props.cardBg,
        $props.cardColor
      ]"
    >
      <div :class="['card-body', $props.cardClass]">
        <h3 v-if="$slots.title" class="card-title">
          <slot name="title" />
        </h3>
        <slot />
      </div>
    </div>
  </div>
</template>

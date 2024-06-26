<script setup lang="ts">
import type { AlignDropdown, PositionDropdownCard } from '../@types/Props'

withDefaults(
  defineProps<{
    widthClass?: string
    label?: string
    icon?: string
    iconRight?: string
    disabled?: boolean
    open?: boolean
    hover?: boolean
    position?: PositionDropdownCard
    align?: AlignDropdown
    cardClass?: string
    cardBgClass?: string
    cardColor?: string
  }>(),
  {
    widthClass: 'w-52',
    label: '',
    icon: '',
    iconRight: '',
    disabled: false,
    open: false,
    hover: false,
    position: 'default',
    align: 'default',
    cardClass: '',
    cardBgClass: 'bg-primary',
    cardColor: 'text-primary-content'
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
        'dropdown-hover': $props.hover,
        'dropdown-open': $props.open,
        'pointer-events-none': $props.disabled
      }
    ]"
  >
    <div tabindex="0" role="button" class="btn m-1 flex gap-2">
      <i v-if="$props.icon" :class="['flex-none self-center', $props.icon]" />
      <span class="flex-1 self-center">{{ $props.label }}</span>
      <i v-if="$props.iconRight" :class="['flex-none self-center', $props.iconRight]" />
      <div class="flex-none self-center">
        <svg
          class="rotate-180"
          width="24px"
          height="24px"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="stroke-current"
            d="M6 15L12 9L18 15"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
    <div
      v-if="!$props.disabled"
      tabindex="0"
      :class="[
        'dropdown-content z-[1] card card-compact p-2 shadow',
        $props.widthClass,
        $props.cardBgClass,
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

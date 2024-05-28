<script setup lang="ts">
import type { ShapeAvatar } from '../@types/Props'

withDefaults(
  defineProps<{
    bgClass?: string
    image?: string
    text?: string
    textClass?: string
    iconClass?: string
    widthClass?: string
    shape?: ShapeAvatar
    mask?: string
    ring?: boolean
    online?: boolean
    offline?: boolean
  }>(),
  {
    bgClass: 'bg-neutral',
    image: '',
    text: '',
    textClass: 'text-xl text-neutral-content',
    iconClass: 'text-2xl bi bi-person',
    widthClass: 'w-16',
    shape: 'circle',
    mask: 'default',
    ring: false,
    online: false,
    offline: false
  }
)
</script>

<template>
  <div
    :class="[
      'avatar',
      {
        online: $props.online,
        offline: $props.offline,
        placeholder: ($props.text && !$props.image) || ($props.iconClass && !$props.image)
      }
    ]"
  >
    <div
      :class="[
        $props.bgClass,
        $props.widthClass,
        {
          'rounded-full': $props.shape === 'circle' && $props.mask === 'default',
          'rounded-3xl': $props.shape === '3xl' && $props.mask === 'default',
          'rounded-2xl': $props.shape === '2xl' && $props.mask === 'default',
          'rounded-xl': $props.shape === 'xl' && $props.mask === 'default',
          'rounded-lg': $props.shape === 'lg' && $props.mask === 'default',
          'rounded-md': $props.shape === 'md' && $props.mask === 'default',
          'rounded-sm': $props.shape === 'sm' && $props.mask === 'default',
          rounded: $props.shape === 'rounded' && $props.mask === 'default',
          'mask mask-squircle': $props.mask === 'squircle',
          'mask mask-hexagon': $props.mask === 'hexagon',
          'mask mask-triangle': $props.mask === 'triangle',
          'ring ring-primary ring-offset-base-100 ring-offset-2': $props.ring
        }
      ]"
    >
      <img v-if="$props.image" :src="$props.image" />
      <span v-else-if="$props.text" :class="$props.textClass">{{ $props.text }}</span>
      <span v-else :class="$props.textClass">
        <i :class="$props.iconClass" />
      </span>
    </div>
  </div>
</template>

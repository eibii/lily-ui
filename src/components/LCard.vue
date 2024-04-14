<script setup lang="ts">
defineEmits(['onClose'])

withDefaults(
  defineProps<{
    cardClass?: string
    image?: string
    imageAlt?: string
    compact?: boolean
    bImage?: boolean
    hImage?: boolean
    center?: boolean
    imageFull?: boolean
    effect?: 'default' | 'glass' | 'neutral'
    closable?: boolean
  }>(),
  {
    cardClass: 'bg-base-100 shadow-xl',
    image: '',
    imageAlt: '',
    compact: false,
    bImage: false,
    hImage: false,
    center: false,
    imageFull: false,
    effect: 'default',
    closable: false
  }
)

import { LButton } from '.'
</script>

<template>
  <div
    :class="[
      'card',
      $props.cardClass,
      {
        'card-compact': $props.compact,
        'image-full': $props.imageFull,
        glass: $props.effect === 'glass',
        'bg-neutral text-neutral-content': $props.effect === 'neutral',
        'card-side': $props.hImage
      }
    ]"
  >
    <figure v-if="$props.image && !$props.bImage">
      <img :src="$props.image" :alt="$props.imageAlt" />
    </figure>
    <div :class="['card-body', { 'items-center text-center': $props.center }]">
      <div v-if="$props.closable" class="card-actions justify-end">
        <LButton class="w-9" size="sm" @click="$emit('onClose')" @keypress.enter="$emit('onClose')">
          <svg
            class="h-6 w-6"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M285.76 344.576a41.6 41.6 0 0 1 58.88-58.88l167.36 167.488 167.424-167.488a41.6 41.6 0 0 1 58.88 58.88L570.816 512l167.488 167.424a41.6 41.6 0 0 1-58.88 58.88L512 570.816l-167.424 167.488a41.6 41.6 0 0 1-58.88-58.88L453.248 512 285.696 344.576z"
            ></path>
          </svg>
        </LButton>
      </div>
      <div v-if="$slots.title" class="card-title">
        <slot name="title" />
      </div>
      <slot />
      <div v-if="$slots.actions" class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
    <figure v-if="$props.image && $props.bImage">
      <img :src="$props.image" :alt="$props.imageAlt" />
    </figure>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    bgClass?: string
    heigthClass?: string
    center?: boolean
    overlay?: boolean
    contentClass?: string
  }>(),
  {
    bgClass: 'bg-base-200',
    heigthClass: 'min-h-screen',
    center: false,
    overlay: false,
    contentClass: ''
  }
)
</script>

<template>
  <div :class="['hero', $props.bgClass, $props.heigthClass]">
    <div v-if="$props.overlay" class="hero-overlay bg-opacity-60"></div>
    <div
      :class="[
        'hero-content',
        $props.contentClass,
        {
          'text-center': $props.center
        }
      ]"
    >
      <slot />
    </div>
  </div>
</template>

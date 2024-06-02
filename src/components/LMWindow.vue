<script setup lang="ts">
withDefaults(
  defineProps<{
    bgClass?: string
    contentClass?: string
  }>(),
  {
    bgClass: 'border border-base-300',
    contentClass: 'flex justify-center px-4 py-16 border-t border-base-300'
  }
)
</script>

<template>
  <div :class="['mockup-window', $props.bgClass]">
    <div :class="$props.contentClass">
      <slot />
    </div>
  </div>
</template>

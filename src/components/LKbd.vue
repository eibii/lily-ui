<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'default' | 'lg' | 'sm' | 'xs'
  }>(),
  {
    size: 'default'
  }
)
</script>

<template>
  <kbd
    :class="[
      'kbd',
      {
        'kbd-lg': size === 'lg',
        'kbd-md': size === 'default',
        'kbd-sm': size === 'sm',
        'kbd-xs': size === 'xs'
      }
    ]"
  >
    <slot />
  </kbd>
</template>

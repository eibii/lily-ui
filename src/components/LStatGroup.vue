<script setup lang="ts">
withDefaults(
  defineProps<{
    shadow?: boolean
    vertical?: boolean
  }>(),
  {
    shadow: true,
    vertical: false
  }
)
</script>

<template>
  <div :class="['stats', { shadow: $props.shadow, 'stats-vertical': $props.vertical }]">
    <slot />
  </div>
</template>

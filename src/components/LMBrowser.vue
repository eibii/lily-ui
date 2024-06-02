<script setup lang="ts">
withDefaults(
  defineProps<{
    domain?: string
    contentClass?: string
  }>(),
  {
    domain: 'https://lilyui.com',
    contentClass: 'flex justify-center px-4 py-16'
  }
)
</script>

<template>
  <div class="mockup-browser border border-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input border border-base-300">{{ $props.domain }}</div>
    </div>
    <div :class="['border-t border-base-300', $props.contentClass]">
      <slot />
    </div>
  </div>
</template>

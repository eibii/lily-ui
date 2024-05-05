<script setup lang="ts">
defineProps<{
  header: string
  iconClass?: string
  active?: boolean
}>()
</script>

<template>
  <slot />
</template>

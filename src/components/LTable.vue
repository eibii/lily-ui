<script setup lang="ts">
withDefaults(
  defineProps<{
    values?: any[]
  }>(),
  {
    values: () => []
  }
)
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <slot />
    </table>
  </div>
</template>

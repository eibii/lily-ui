<script setup lang="ts">
withDefaults(
  defineProps<{
    shadow?: boolean
  }>(),
  {
    shadow: true
  }
)
</script>

<template>
  <div :class="['stat', { shadow: $props.shadow }]">
    <div v-if="$slots.figure" class="stat-figure">
      <slot name="figure" />
    </div>
    <div v-if="$slots.title" class="stat-title">
      <slot name="title" />
    </div>
    <div v-if="$slots.value" class="stat-value">
      <slot name="value" />
    </div>
    <div v-if="$slots.desc" class="stat-desc">
      <slot name="desc" />
    </div>
    <div v-if="$slots.actions" class="stat-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

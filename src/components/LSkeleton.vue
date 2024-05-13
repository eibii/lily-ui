<script setup lang="ts">
withDefaults(
  defineProps<{
    circle?: boolean
  }>(),
  {
    circle: false
  }
)
</script>

<template>
  <div
    :class="[
      'skeleton',
      {
        'rounded-full': $props.circle
      }
    ]"
  ></div>
</template>

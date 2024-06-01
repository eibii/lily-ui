<script setup lang="ts">
withDefaults(
  defineProps<{
    vertical?: boolean
  }>(),
  {
    vertical: false
  }
)
</script>

<template>
  <div :class="['join', { 'join-vertical': $props.vertical }]">
    <slot joinClass="join-item" />
  </div>
</template>

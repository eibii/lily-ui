<script setup lang="ts">
import { useAttrs } from 'vue'

withDefaults(
  defineProps<{
    src?: string
  }>(),
  {
    src: undefined
  }
)
const $attrs = useAttrs()
</script>

<template>
  <img v-if="$props.src" :src="$props.src" v-bind="$attrs" />
  <div v-else>
    <slot />
  </div>
</template>

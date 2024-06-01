<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    right?: boolean
  }>(),
  {
    right: false
  }
)
const btnOpen = ref<HTMLElement | null>(null)
const id = `name-${self.crypto.randomUUID()}`
const onOpen = () => {
  if (btnOpen.value) {
    btnOpen.value.click()
  }
}
</script>

<template>
  <div
    :class="[
      'drawer',
      {
        'drawer-end': $props.right
      }
    ]"
  >
    <input :id="id" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label ref="btnOpen" :for="id" class="drawer-button" />
      <slot name="drawerContent" :open="onOpen" />
    </div>
    <div class="drawer-side">
      <label :for="id" aria-label="close sidebar" class="drawer-overlay" />
      <slot name="drawerSide" />
    </div>
  </div>
</template>

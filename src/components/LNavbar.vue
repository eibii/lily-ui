<script setup lang="ts">
type Item = {
  label: string
  iconClass?: string
}

defineEmits<{
  (e: 'onClick', item: Item): void
}>()

withDefaults(
  defineProps<{
    items: Item[]
    navbarClass?: string
  }>(),
  {
    navbarClass: 'bg-base-100'
  }
)
</script>

<template>
  <div :class="['navbar', $props.navbarClass]">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
</template>

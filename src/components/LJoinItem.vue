<script setup lang="ts">
import { onBeforeMount } from 'vue'

const $slots = defineSlots()

onBeforeMount(() => {
  let [el] = $slots.default()

  if (el && el?.props?.class) {
    if (el.props.class && el.props.class.search('join-item') !== -1) return

    el.props = {
      ...el.props,
      class: `${el.props.class} join-item`
    }
  } else if (el && el?.props) {
    el.props = {
      ...el.props,
      class: 'join-item'
    }
  } else if (el) {
    el = {
      ...el,
      props: {
        class: 'join-item'
      }
    }
  }
})
</script>

<template>
  <slot />
</template>

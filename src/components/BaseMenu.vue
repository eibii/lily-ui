<script setup lang="ts">
import type { ColMenu, Menu } from '../@types/Props'

const emit = defineEmits<{
  (e: 'onClick', menu: Menu): void
}>()
withDefaults(
  defineProps<{
    colMenu: ColMenu
    col?: boolean
  }>(),
  {
    col: false
  }
)

const onClick = (menu: Menu) => {
  if (menu.link) {
    window.open(menu.link, menu.target || '_self')
    return
  }
  emit('onClick', menu)
}
</script>

<template>
  <nav v-if="$props.col" class="grid grid-flow-col gap-4">
    <template v-for="menu in $props.colMenu.menus" :key="menu">
      <div
        class="link link-hover flex gap-2"
        @click="onClick(menu)"
        @keypress.enter="onClick(menu)"
      >
        <span v-if="menu.svg" v-html="menu.svg" />
        <i v-else-if="menu.icon" :class="menu.icon" />
        <span v-if="menu.label">{{ menu.label }}</span>
      </div>
    </template>
  </nav>
  <nav v-else>
    <h6 v-if="$props.colMenu.title" class="footer-title">
      {{ $props.colMenu.title }}
    </h6>
    <template v-for="menu in $props.colMenu.menus" :key="menu">
      <div
        class="link link-hover flex gap-2"
        @click="onClick(menu)"
        @keypress.enter="onClick(menu)"
      >
        <span v-if="menu.svg" v-html="menu.svg" />
        <i v-else-if="menu.icon" :class="menu.icon" />
        <span v-if="menu.label">{{ menu.label }}</span>
      </div>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { LThemeMode, LMenu, LBadge } from './components'
import { ref } from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const items = [
  {
    iconClass: 'bi bi-house',
    tooltip: 'Home'
  },
  {
    iconClass: 'bi bi-info-circle',
    tooltip: 'Info',
    active: true
  },
  {
    iconClass: 'bi bi-bar-chart',
    tooltip: 'Stats',
    badge: '10'
  },
  {
    iconClass: 'bi bi-person',
    tooltip: 'Profile',
    disabled: true
  }
]
const onClick = (item: any) => {
  console.log(item)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8 flex">
      <div class="flex-1"><img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" /></div>
      <div class="flex-none pr-4 self-center">
        <LThemeMode v-model="value" default-mode="light" width-class="w-8" height-class="h-8" />
      </div>
    </div>
    <div class="p-40 flex justify-center">
      <LMenu :items="items" shape="square" @on-click="onClick">
        <template #titleParent>
          <div class="text-center">Menu</div>
        </template>
        <template #badge="{ item }">
          <LBadge effect="primary">{{ item.badge }}</LBadge>
        </template>
      </LMenu>
    </div>
  </div>
</template>

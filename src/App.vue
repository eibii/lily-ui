<script setup lang="ts">
import { ref } from 'vue'
import vTooltip from './directives/Tooltip'

import { LThemeMode, LButton } from './components'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const items = [
  {
    label: 'resume.pdf',
    iconClass: 'text-xl bi bi-filetype-pdf',
    active: true
  },
  {
    label: 'profile.jpg',
    iconClass: 'text-xl bi bi-file-image',

    active: true
  },
  {
    label: 'cover-letter.docx',
    iconClass: 'text-xl bi bi-file-word'
  }
]
const onClick = (item: any) => {
  console.log(item)
}
const tab = ref(1)
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
      <LButton v-tooltip.open.bottom.primary="'hello'" label="Hover me" />
    </div>
  </div>
</template>

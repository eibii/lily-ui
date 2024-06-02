<script setup lang="ts">
import { ref } from 'vue'

import { LThemeMode, LMWindow } from './components'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const range = ref(true)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8 flex">
      <div class="flex-1"><img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" /></div>
      <div class="flex-none pr-4 self-center">
        <LThemeMode v-model="value" default-mode="light" width-class="w-8" height-class="h-8" />
      </div>
    </div>
    <div class="py-10">
      <pre>{{ range }}</pre>
    </div>
    <div class="flex-1">
      <LMWindow
        bg-class="border bg-base-300"
        content-class="flex justify-center px-4 py-16 bg-base-200"
      >
        Hello!
      </LMWindow>
    </div>
  </div>
</template>

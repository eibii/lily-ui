<script setup lang="ts">
import { LThemeMode, LCountdownTime } from './components'
import { ref } from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8 flex">
      <div class="flex-1"><img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" /></div>
      <div class="flex-none pr-4 self-center">
        <LThemeMode v-model="value" default-mode="light" width-class="w-8" height-class="h-8" />
      </div>
    </div>
    <div class="p-4 flex justify-center">
      <LCountdownTime
        layout="boxes"
        :seconds="10"
        text-days="Dias"
        text-hours="Horas"
        text-minutes="Min"
        text-seconds="Seg"
      />
    </div>
  </div>
</template>

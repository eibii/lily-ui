<script setup lang="ts">
import { LThemeMode, LDiff } from './components'
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
    <div class="p-40 flex justify-center">
      <LDiff aspect="16/9">
        <template #item-1>
          <div
            class="bg-primary text-primary-content text-9xl font-black grid place-content-center"
          >
            DAISY
          </div>
        </template>
        <template #item-2>
          <div class="bg-base-200 text-9xl font-black grid place-content-center">DAISY</div>
        </template>
      </LDiff>
    </div>
  </div>
</template>

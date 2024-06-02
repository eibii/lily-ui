<script setup lang="ts">
import { ref } from 'vue'

import { LThemeMode, LJoin, LJoinItem } from './components'

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
    <div class="flex-1">
      <LJoin>
        <LJoinItem>
          <button class="btn join-item">Button</button>
        </LJoinItem>
        <LJoinItem>
          <button class="btn join-item">Button</button>
        </LJoinItem>
        <LJoinItem>
          <button class="btn join-item">Button</button>
        </LJoinItem>
      </LJoin>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LThemeMode, LCard } from './components'
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
      <LCard
        class="w-96"
        image="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=10"
        image-alt="neon"
      >
        <template #title> New movie is released! </template>
        <p>Click the button to watch on Jetflix app.</p>
        <template #actions>
          <button class="btn btn-primary">Watch</button>
        </template>
      </LCard>
    </div>
  </div>
</template>

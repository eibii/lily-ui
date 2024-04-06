<script setup lang="ts">
import { LThemeCtr } from './components'
import { ref } from 'vue'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8">
      <img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" />
    </div>
    <div class="flex justify-center">
      <LThemeCtr
        v-model="value"
        off-icon="bi bi-brightness-high"
        on-icon="bi bi-brightness-high-fill"
      />
    </div>
    <div class="flex justify-center">
      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

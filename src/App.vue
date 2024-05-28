<script setup lang="ts">
import { ref } from 'vue'
import vTooltip from './directives/Tooltip'

import { LThemeMode, LCheckbox } from './components'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const check = ref([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8 flex">
      <div class="flex-1"><img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" /></div>
      <div class="flex-none pr-4 self-center">
        <LThemeMode v-model="value" default-mode="light" width-class="w-8" height-class="h-8" />
      </div>
    </div>
    <div class="py-10 flex justify-center">
      <pre>{{ check }}</pre>
    </div>
    <div class="p-40 flex justify-center gap-3">
      <LCheckbox v-model="check" value="item1" />
      <LCheckbox v-model="check" value="item2" />
      <LCheckbox v-model="check" value="item3" />
    </div>
  </div>
</template>

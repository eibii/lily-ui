<script setup lang="ts">
import { LThemeMode, LStatGroup, LStat, LAvatar } from './components'
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
      <LStatGroup vertical>
        <LStat :shadow="false">
          <template #figure>
            <i class="bi bi-bar-chart text-4xl"></i>
          </template>
          <template #title> Total Page Views </template>
          <template #value> 89,400 </template>
          <template #desc> 21% more than last month </template>
        </LStat>
        <LStat :shadow="false">
          <template #figure>
            <LAvatar
              image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </template>
          <template #title> 86% </template>
          <template #value>
            <p class="text-secondary">Tasks done</p>
          </template>
          <template #desc> 31 tasks remaining </template>
          <template #actions>
            <button class="btn btn-sm">Withdrawal</button>
            <button class="btn btn-sm">Deposit</button>
          </template>
        </LStat>
      </LStatGroup>
    </div>
  </div>
</template>

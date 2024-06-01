<script setup lang="ts">
import type { SocialMenu } from '@/@types/Props'

import { ref } from 'vue'

import { LThemeMode, LFooter } from './components'

import 'bootstrap-icons/font/bootstrap-icons.css'

const value = ref(false)
const range = ref(true)
const socialMenu: SocialMenu[] = [
  {
    link: 'https://twitter.com',
    target: '_blank',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>',
    icon: 'bi bi-twitter'
  }
]
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
    <LFooter
      class="p-5 items-center"
      copyright="Copyright © 2024 - All right reserved by ACME Industries Ltd"
      :socialMenu="socialMenu"
    />
  </div>
</template>

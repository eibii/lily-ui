<script setup lang="ts">
import { LButton } from './components';
</script>

<template>
  <div class="flex flex-col">
    <div class="py-8">
      <img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" />
    </div>
    <div class="flex justify-center">
      <LButton label="Hello LilyUI" effect="ghost" />
    </div>
  </div>
</template>

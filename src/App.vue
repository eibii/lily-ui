<script setup lang="ts">
import { LDropdownCard } from './components'
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', disabled: true, value: '2' },
  { label: 'Option 3', value: '3' }
]
const onClickOption = (option: any) => {
  console.log(option)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="py-8">
      <img src="./assets/logo.svg" alt="logo" class="mx-auto max-h-20" />
    </div>
    <div class="flex justify-center">
      <LDropdownCard label="Hello LilyUI">
        <template #title>Teste</template>
        <p>Teste conteúdo</p>
      </LDropdownCard>
    </div>
  </div>
</template>

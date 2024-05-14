<script setup lang="ts">
import type { Counter, CounterClass } from '../@types/Props'

import { onMounted, nextTick } from 'vue'

withDefaults(
  defineProps<{
    counter?: Counter
    counterClass?: CounterClass
  }>(),
  {
    counter: '',
    counterClass: 'bg-neutral text-neutral-content'
  }
)
const avatarGroupId = self.crypto.randomUUID()

onMounted(() => {
  nextTick(() => {
    const el = document.querySelector(`#id-${avatarGroupId}`)
    if (el) {
      const elCounter = el.querySelector('.avatar-counter') as HTMLElement

      if (elCounter) {
        const [elAvatar] = el.querySelectorAll('.avatar')

        if (elAvatar) {
          elCounter.style.width = `${elAvatar.getBoundingClientRect().width}px`
          elCounter.style.height = `${elAvatar.getBoundingClientRect().height}px`
        }
      }
    }
  })
})
</script>

<template>
  <div :id="`id-${avatarGroupId}`" class="avatar-group -space-x-6 rtl:space-x-reverse">
    <slot />
    <div v-if="$props.counter" class="avatar-counter avatar placeholder">
      <div :class="[$props.counterClass]">
        <span>{{ $props.counter }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SeverityBase, PositionBase } from '../@types/Props'
type Message = {
  message: string
  title?: string
  iconClass?: string
  severity?: SeverityBase
  duration?: number
}

import LAlert from './LAlert.vue'

defineEmits<{
  (e: 'onClose', message: Message): void
}>()
withDefaults(
  defineProps<{
    messages?: Message[]
    position?: PositionBase
  }>(),
  {
    messages: () => [],
    position: 'default'
  }
)
</script>

<template>
  <div
    :class="[
      'toast',
      {
        'toast-top toast-start': $props.position === 'top-left',
        'toast-top toast-center': $props.position === 'top-center',
        'toast-top toast-end': $props.position === 'top-right',
        'toast-start toast-middle': $props.position === 'middle-left',
        'toast-center toast-middle': $props.position === 'middle-center',
        'toast-end toast-middle': $props.position === 'middle-right',
        'toast-start': $props.position === 'bottom-left',
        'toast-center': $props.position === 'bottom-center',
        'toast-end': $props.position === 'bottom-right'
      }
    ]"
  >
    <tempate v-for="message in $props.messages" :key="message">
      <LAlert
        :iconClass="message.iconClass"
        :title="message.title"
        :message="message.message"
        :severity="message.severity"
        :duration="message.duration || 3000"
        @onClose="$emit('onClose', message)"
      />
    </tempate>
  </div>
</template>

<script setup lang="ts">
import type { Severity } from '../@types/Props'

withDefaults(
  defineProps<{
    align?: 'default' | 'end'
    headerTime?: string
    severity?: Severity
  }>(),
  {
    align: 'default',
    headerTime: '',
    severity: 'default'
  }
)
</script>

<template>
  <div
    :class="[
      'chat',
      {
        'chat-start': $props.align === 'default',
        'chat-end': $props.align === 'end'
      }
    ]"
  >
    <div v-if="$slots.avatar" class="chat-image">
      <slot name="avatar" />
    </div>
    <div v-if="$slots.header || $props.headerTime" class="chat-header">
      <slot name="header" />
      <time v-if="$props.headerTime" class="ml-1 text-xs opacity-50">{{ $props.headerTime }}</time>
    </div>
    <div
      :class="[
        'chat-bubble',
        {
          'chat-bubble-primary': $props.severity === 'primary',
          'chat-bubble-secondary': $props.severity === 'secondary',
          'chat-bubble-accent': $props.severity === 'accent',
          'chat-bubble-info': $props.severity === 'info',
          'chat-bubble-success': $props.severity === 'success',
          'chat-bubble-warning': $props.severity === 'warning',
          'chat-bubble-error': $props.severity === 'danger',
          'chat-bubble-neutral': $props.severity === 'neutral'
        }
      ]"
    >
      <slot />
    </div>
    <div v-if="$slots.footer" class="chat-footer opacity-50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SeverityBase, PositionBase } from '../@types/Props'

import LAlert from './LAlert.vue'

withDefaults(
  defineProps<{
    message: string
    title?: string
    iconClass?: string
    severity?: SeverityBase
    position?: PositionBase
  }>(),
  {
    title: '',
    iconClass: undefined,
    severity: 'default',
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
    <LAlert
      :iconClass="$props.iconClass"
      :title="$props.title"
      :message="$props.message"
      :severity="$props.severity"
    >
      <slot />
    </LAlert>
  </div>
</template>

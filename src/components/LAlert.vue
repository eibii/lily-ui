<script setup lang="ts">
import type { SeverityBase } from '../@types/Props'

import { ref, onBeforeMount } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
    message?: string
    iconClass?: string
    severity?: SeverityBase
  }>(),
  {
    title: '',
    message: '',
    iconClass: '',
    severity: 'default'
  }
)
const defaultIconClass = ref('')

onBeforeMount(() => {
  if (props.severity === 'info' && !props.iconClass) {
    defaultIconClass.value = 'bi bi-info-circle'
  } else if (props.severity === 'success' && !props.iconClass) {
    defaultIconClass.value = 'bi bi-check-circle'
  } else if (props.severity === 'warning' && !props.iconClass) {
    defaultIconClass.value = 'bi bi-exclamation-triangle'
  } else if (props.severity === 'danger' && !props.iconClass) {
    defaultIconClass.value = 'bi bi-x-circle'
  }
})
</script>

<template>
  <div
    role="alert"
    :class="[
      'alert',
      {
        'alert-info': $props.severity === 'info',
        'alert-success': $props.severity === 'success',
        'alert-warning': $props.severity === 'warning',
        'alert-error': $props.severity === 'danger'
      }
    ]"
  >
    <i
      v-if="$props.iconClass || defaultIconClass"
      :class="[
        $props.iconClass || defaultIconClass,
        {
          'text-lg': !$props.title,
          'text-3xl': $props.title
        }
      ]"
    />
    <span v-if="$props.message || $props.title" class="flex flex-col">
      <span v-if="$props.title" class="text-lg">{{ $props.title }}</span>
      <span v-if="$props.message">{{ $props.message }}</span>
    </span>
    <slot />
  </div>
</template>

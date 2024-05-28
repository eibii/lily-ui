<script setup lang="ts">
import type { SeverityExtend } from '../@types/Props'

withDefaults(
  defineProps<{
    label?: string
    serverity?: SeverityExtend
    underline?: boolean
  }>(),
  {
    label: '',
    serverity: 'default',
    underline: false
  }
)
</script>

<template>
  <a
    :class="[
      'link',
      {
        'link-primary': $props.serverity === 'primary',
        'link-secondary': $props.serverity === 'secondary',
        'link-accent': $props.serverity === 'accent',
        'link-neutral': $props.serverity === 'neutral',
        'link-success': $props.serverity === 'success',
        'link-error': $props.serverity === 'danger',
        'link-warning': $props.serverity === 'warning',
        'link-info': $props.serverity === 'info',
        'link-light': $props.serverity === 'light',
        'link-dark': $props.serverity === 'dark',
        'link-link': $props.serverity === 'link',
        'link-hover': $props.underline
      }
    ]"
    href="#"
    target="_bla
  }]"
  >
    <span v-if="$props.label"> {{ $props.label }}</span>
    <slot v-else />
  </a>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string
    color?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'neutral'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | 'light'
      | 'dark'
      | 'link'
    underline?: boolean
  }>(),
  {
    label: '',
    color: 'default',
    underline: false
  }
)
</script>

<template>
  <a
    :class="[
      'link',
      {
        'link-primary': $props.color === 'primary',
        'link-secondary': $props.color === 'secondary',
        'link-accent': $props.color === 'accent',
        'link-neutral': $props.color === 'neutral',
        'link-success': $props.color === 'success',
        'link-error': $props.color === 'danger',
        'link-warning': $props.color === 'warning',
        'link-info': $props.color === 'info',
        'link-light': $props.color === 'light',
        'link-dark': $props.color === 'dark',
        'link-link': $props.color === 'link',
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

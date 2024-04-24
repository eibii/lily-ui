<script setup lang="ts">
withDefaults(
  defineProps<{
    bg?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral'
    unstyledBg?: boolean
  }>(),
  {
    bg: 'default',
    unstyledBg: false
  }
)
</script>

<template>
  <div
    :class="[
      'navbar',
      {
        'bg-base-100 shadow-xl rounded-box': $props.bg === 'default' && !$props.unstyledBg,
        'bg-primary text-primary-content shadow-xl rounded-box':
          $props.bg === 'primary' && !$props.unstyledBg,
        'bg-secondary text-secondary-content shadow-xl rounded-box':
          $props.bg === 'secondary' && !$props.unstyledBg,
        'bg-accent text-accent-content shadow-xl rounded-box':
          $props.bg === 'accent' && !$props.unstyledBg,
        'bg-neutral text-neutral-content shadow-xl rounded-box':
          $props.bg === 'neutral' && !$props.unstyledBg
      }
    ]"
  >
    <div v-if="$slots.start" class="navbar-start">
      <slot name="start" />
    </div>
    <div v-if="$slots.center" class="navbar-center">
      <slot name="center" />
    </div>
    <slot />
    <div v-if="$slots.end" class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>

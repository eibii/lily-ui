<script setup lang="ts">
withDefaults(
  defineProps<{
    bgClass?: 'default' | 'primary' | 'secondary' | 'accent' | 'neutral'
    unstyledBg?: boolean
  }>(),
  {
    bgClass: 'default',
    unstyledBg: false
  }
)
</script>

<template>
  <div
    :class="[
      'navbar',
      {
        'bg-base-100 shadow-xl rounded-box': $props.bgClass === 'default' && !$props.unstyledBg,
        'bg-primary text-primary-content shadow-xl rounded-box':
          $props.bgClass === 'primary' && !$props.unstyledBg,
        'bg-secondary text-secondary-content shadow-xl rounded-box':
          $props.bgClass === 'secondary' && !$props.unstyledBg,
        'bg-accent text-accent-content shadow-xl rounded-box':
          $props.bgClass === 'accent' && !$props.unstyledBg,
        'bg-neutral text-neutral-content shadow-xl rounded-box':
          $props.bgClass === 'neutral' && !$props.unstyledBg
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

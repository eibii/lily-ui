<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit'
    size?: 'xs' | 'sm' | 'default' | 'lg'
    label?: string
    icon?: string
    iconRight?: string
    block?: boolean
    wide?: boolean
    outline?: boolean
    active?: boolean
    disabled?: boolean
    loading?: boolean
    noAnimation?: boolean
    loadingText?: string
    shape?: 'default' | 'circle' | 'square'
    effect?: 'default' | 'glass' | 'ghost' | 'link'
    severity?:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'neutral'
  }>(),
  {
    type: 'button',
    size: 'default',
    label: '',
    icon: '',
    iconRight: '',
    block: false,
    wide: false,
    outline: false,
    active: false,
    disabled: false,
    loading: false,
    noAnimation: false,
    loadingText: '',
    shape: 'default',
    effect: 'default',
    severity: 'default'
  }
)
</script>

<template>
  <button
    :type="$props.type"
    :class="[
      'btn',
      {
        'btn-active': $props.active,
        'btn-xs': $props.size === 'xs',
        'btn-sm': $props.size === 'sm',
        'btn-md': $props.size === 'default',
        'btn-lg': $props.size === 'lg',
        'btn-outline': $props.outline,
        'no-animation': $props.noAnimation,
        'btn-block': $props.block,
        'btn-wide': $props.wide,
        'btn-circle': $props.shape === 'circle',
        'btn-square': $props.shape === 'square',
        'btn-primary': $props.severity === 'primary',
        'btn-secondary': $props.severity === 'secondary',
        'btn-accent': $props.severity === 'accent',
        'btn-info': $props.severity === 'info',
        'btn-success': $props.severity === 'success',
        'btn-warning': $props.severity === 'warning',
        'btn-error': $props.severity === 'danger',
        'btn-neutral': $props.severity === 'neutral',
        'btn-ghost': $props.effect === 'ghost',
        'btn-glass': $props.effect === 'glass',
        'btn-link': $props.effect === 'link'
      }
    ]"
    :disabled="$props.disabled || $props.loading"
    v-bind="$attrs"
  >
    <div v-if="$props.loading" data-loading class="flex gap-2">
      <span class="flex-none self-center loading loading-spinner" />
      <span v-if="$props.loadingText" class="flex-1 self-center">{{ $props.loadingText }}</span>
    </div>
    <div v-else>
      <i v-if="$props.icon" :class="$props.icon" />
      <span v-if="$props.label">{{ $props.label }}</span>
      <span v-else-if="$slots.default"><slot /></span>
      <i v-if="$props.iconRight" :class="$props.iconRight" />
    </div>
  </button>
</template>

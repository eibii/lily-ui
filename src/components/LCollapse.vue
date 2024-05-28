<script setup lang="ts">
import type { CollapseIcon } from '../@types/Props'

defineEmits<{
  (e: 'onExpand', ev: Event): void
}>()
withDefaults(
  defineProps<{
    bgClass?: string
    focus?: boolean
    active?: boolean
    unstyledTitle?: boolean
    collapseIcon?: CollapseIcon
  }>(),
  {
    bgClass: 'bg-base-200',
    focus: false,
    active: false,
    unstyledTitle: false,
    collapseIcon: 'arrow'
  }
)
</script>

<template>
  <div
    tabindex="0"
    :class="[
      'collapse',
      $props.bgClass,
      {
        'collapse-arrow': $props.collapseIcon === 'arrow',
        'collapse-plus': $props.collapseIcon === 'plus'
      }
    ]"
  >
    <input
      v-if="!$props.focus"
      type="checkbox"
      v-bind="$props.active ? { checked: true } : {}"
      @change="$emit('onExpand', $event)"
    />
    <div
      v-if="$slots.title"
      :class="[
        'collapse-title',
        {
          'text-xl font-medium': !$props.unstyledTitle
        }
      ]"
    >
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

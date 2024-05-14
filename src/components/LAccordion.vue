<script setup lang="ts">
import type { BgClass, Name, Active, Unstyled, CollapseIcon } from '../@types/Props'

defineEmits<{
  (e: 'onExpand', ev: Event): void
}>()
withDefaults(
  defineProps<{
    bgClass?: BgClass
    name?: Name
    active?: Active
    unstyledTitle?: Unstyled
    collapseIcon?: CollapseIcon
  }>(),
  {
    bgClass: 'bg-base-200',
    name: 'my-accordion-1',
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
      'accordion-item collapse',
      $props.bgClass,
      {
        'collapse-arrow': $props.collapseIcon === 'arrow',
        'collapse-plus': $props.collapseIcon === 'plus'
      }
    ]"
    v-bind="{ ...$attrs }"
  >
    <input
      type="radio"
      :name="$props.name"
      v-bind="$props.active ? { checked: true } : {}"
      @change="$emit('onExpand', $event)"
    />
    <div :class="['collapse-title ', { 'text-xl font-medium': !$props.unstyledTitle }]">
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>

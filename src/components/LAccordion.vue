<script setup lang="ts">
defineEmits(['onExpand'])
withDefaults(
  defineProps<{
    name?: string
    active?: boolean
    unstyledTitle?: boolean
    collapseIcon?: 'arrow' | 'plus' | 'default'
  }>(),
  {
    name: 'my-accordion-1',
    active: false,
    unstyledTitle: false,
    collapseIcon: 'arrow'
  }
)
</script>

<template>
  <div
    :class="[
      'accordion-item collapse bg-base-200',
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

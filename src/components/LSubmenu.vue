<script setup lang="ts">
import type { Item } from '../@types/Menu'

defineEmits<{
  (e: 'onClick', item: Item): void
}>()
defineProps<{
  items: Item[]
}>()
</script>

<template>
  <ul>
    <template v-for="(item, i) in $props.items" :key="i">
      <template v-if="item.collapsed !== undefined">
        <li>
          <details :open="item.collapsed">
            <summary v-if="item.title" class="flex gap-2">
              <i v-if="item.iconClass" :class="['flex-none', item.iconClass]" />
              <span :class="['flex-1', item.titleClass]">{{ item.title }}</span>
            </summary>
            <LSubmenu
              v-if="item?.items && item.items.length"
              :items="item.items"
              @onClick="$emit('onClick', $event)"
            />
          </details>
        </li>
      </template>
      <template v-else>
        <li v-if="item.title" class="menu-title">
          <div class="flex gap-2">
            <i v-if="item.iconClass" :class="['flex-none place-self-center', item.iconClass]" />
            <span :class="['flex-1 place-self-center', item.titleClass]">{{ item.title }}</span>
          </div>
        </li>
        <li :class="{ disabled: item.disabled }">
          <a
            v-if="!item.title && (item.label || item.iconClass)"
            :class="[
              'menu-item flex gap-2',
              item.labelClass,
              {
                tooltip: item.tooltip,
                'tooltip-right':
                  item.tooltip && (!item.tooltipPosition || item.tooltipPosition === 'right'),
                'tooltip-left': item.tooltip && item.tooltipPosition === 'left',
                'tooltip-top': item.tooltip && item.tooltipPosition === 'top',
                'tooltip-bottom': item.tooltip && item.tooltipPosition === 'bottom',
                active: item.active
              }
            ]"
            v-bind="item.tooltip ? { 'data-tip': item.tooltip } : {}"
            @click="item.disabled ? () => {} : $emit('onClick', item)"
            @keypress.enter="item.disabled ? () => {} : $emit('onClick', item)"
          >
            <i v-if="item.iconClass" :class="item.iconClass" />
            <span v-if="item.label" :class="item.labelClass">{{ item.label }}</span>
            <slot v-if="$slots.badge && item.badge" name="badge" :idx="i" :item="item" />
            <span v-if="!$slots.badge && item.badge" class="badge badge-sm">{{ item.badge }}</span>
          </a>
          <LSubmenu
            v-if="item?.items && item.items.length"
            :items="item.items"
            @onClick="$emit('onClick', $event)"
          />
        </li>
      </template>
    </template>
  </ul>
</template>

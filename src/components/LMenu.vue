<script setup lang="ts">
type Item = {
  label?: string
  labelClass?: string
  iconClass?: string
  to?: any
  tooltip?: string
  tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
  disabled?: boolean
  badge?: string
  active?: boolean
}

defineEmits<{
  (e: 'onClick', item: Item): void
}>()
withDefaults(
  defineProps<{
    items: Item[]
    menuClass?: string
    horizontal?: boolean
    size?: 'default' | 'sm' | 'xs' | 'lg'
    shape?: 'default' | 'square'
  }>(),
  {
    menuClass: 'bg-base-200',
    horizontal: false,
    size: 'default',
    shape: 'default'
  }
)
</script>

<template>
  <ul
    :class="[
      'menu',
      $props.menuClass,
      {
        'rounded-box': $props.shape === 'default',
        '[&_li>*]:rounded-none': $props.shape === 'square',
        'menu-horizontal': $props.horizontal,
        'menu-sm': $props.size === 'sm',
        'menu-xs': $props.size === 'xs',
        'menu-md': $props.size === 'default',
        'menu-lg': $props.size === 'lg'
      }
    ]"
  >
    <template v-if="$slots.titleParent">
      <li>
        <h2 class="menu-title">
          <slot name="titleParent" />
        </h2>
        <ul>
          <template v-for="(item, i) in $props.items" :key="i">
            <li :class="{ disabled: item.disabled }">
              <a
                :class="[
                  'menu-item flex gap-1',
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
                <span v-if="!$slots.badge && item.badge" class="badge badge-sm">{{
                  item.badge
                }}</span>
              </a>
            </li>
          </template>
        </ul>
      </li>
    </template>
    <template v-else>
      <li v-if="$slots.title" class="menu-title">
        <slot name="title" />
      </li>
      <template v-for="(item, i) in $props.items" :key="i">
        <li :class="{ disabled: item.disabled }">
          <a
            :class="[
              'menu-item flex gap-1',
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
        </li>
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
type Item = {
  label: string
  labelClass?: string
  iconClass?: string
  to?: any
}

defineEmits<{
  (e: 'onClick', item: Item): void
}>()
withDefaults(
  defineProps<{
    items: Item[]
    iconClass?: string
    textSize?: 'default' | 'xs' | 'md' | 'lg'
    lastItemClick?: boolean
  }>(),
  {
    textSize: 'default',
    iconClass: '',
    lastItemClick: false
  }
)
</script>

<template>
  <div
    :class="[
      'breadcrumbs',
      {
        'text-sm': $props.textSize === 'default',
        'text-xs': $props.textSize === 'xs',
        'text-base': $props.textSize === 'md',
        'text-lg': $props.textSize === 'lg'
      }
    ]"
  >
    <ul>
      <template v-for="(item, i) in $props.items" :key="i">
        <li v-if="i + 1 < $props.items.length || $props.lastItemClick">
          <a
            :class="item.labelClass"
            @click="$emit('onClick', item)"
            @keypress.enter="$emit('onClick', item)"
          >
            <i
              v-if="item.iconClass || $props.iconClass"
              :class="[item.iconClass || $props.iconClass, 'mr-2']"
            />
            {{ item.label }}
          </a>
        </li>
        <li v-else>
          <i
            v-if="item.iconClass || $props.iconClass"
            :class="[item.iconClass || $props.iconClass, 'mr-2']"
          />
          {{ item.label }}
        </li>
      </template>
    </ul>
  </div>
</template>

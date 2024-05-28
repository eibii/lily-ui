<script setup lang="ts">
import type { SizeBase, TypeTab } from '../@types/Props'

import { ref, computed, onMounted, watch } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: number
    size?: SizeBase
    type?: TypeTab
  }>(),
  {
    modelValue: 0,
    size: 'default',
    type: 'default'
  }
)
const $slots = defineSlots()
const tab = ref(0)
const tabsId = self.crypto.randomUUID()
const tabs = computed(() => {
  let i = 0
  return $slots.default().reduce((tabs: any[], child: any) => {
    if (child.type.__name === 'LTab') {
      tabs.push({ ...child, props: { ...child.props, active: i === tab.value } })
      i++
    }
    return tabs
  }, [])
})

watch(tab, (value) => {
  emit('update:modelValue', value)
})

onMounted(() => {
  tab.value = props.modelValue
})
</script>

<template>
  <div class="flex flex-col">
    <div
      role="tablist"
      :id="`id-${tabsId}`"
      :class="[
        'tabs',
        {
          'tabs-xs': $props.size === 'xs',
          'tabs-sm': $props.size === 'sm',
          'tabs-lg': $props.size === 'lg',
          'tabs-boxed': $props.type === 'boxed',
          'tabs-bordered': $props.type === 'default',
          'tabs-lifted': $props.type === 'lifted'
        }
      ]"
    >
      <template v-for="(cTab, i) in tabs" :key="i">
        <div
          role="tab"
          :class="[
            'tab',
            {
              'tab-active': cTab.props.active,
              'first:border-transparent last:border-transparent':
                $props.type === 'lifted' && tab !== 0 && tabs.length - 1 !== tab,
              'last:border-transparent': $props.type === 'lifted' && tab === 0,
              'first:border-transparent': $props.type === 'lifted' && tabs.length - 1 === tab
            }
          ]"
          :aria-label="cTab.props.header"
          @click="tab = i"
        >
          <i v-if="cTab.props.icon" :class="cTab.props.icon" />
          <span>{{ cTab.props.header }}</span>
        </div>
      </template>
    </div>
    <template v-for="(tab, i) in tabs" :key="i">
      <div
        v-if="tab.props.active"
        :class="[
          'p-4',
          {
            '-mt-[1px] bg-base-100 border border-base-300': $props.type === 'lifted',
            'rounded-box': $props.type === 'lifted' && i !== 0 && tabs.length - 1 !== i,
            'rounded-b-box rounded-r-box': $props.type === 'lifted' && i === 0,
            'rounded-b-box rounded-l-box': $props.type === 'lifted' && tabs.length - 1 === i
          }
        ]"
      >
        <Component :is="tab" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    items: {
      iconClass?: string
      label?: string
      labelBox?: boolean
      labelClass?: string
      lineStartClass?: string
      lineEndClass?: string
      middleClass?: string
      desc?: string
      descClass?: string
    }[]
    iconClass?: string
    startLine?: boolean
    endLine?: boolean
    noIcon?: boolean
    vertical?: boolean
  }>(),
  {
    iconClass: 'bi bi-check-circle-fill',
    startLine: false,
    endLine: false,
    noIcon: false,
    vertical: false
  }
)
</script>

<template>
  <ul :class="['timeline', { 'timeline-vertical': $props.vertical }]">
    <template v-for="(item, i) in $props.items" :key="i">
      <li>
        <hr v-if="i > 0 || $props.startLine" :class="item.lineStartClass" data-start-line />
        <div
          v-if="item.label"
          :class="['timeline-start', { 'timeline-box': item.labelBox }, item.labelClass]"
        >
          {{ item.label }}
        </div>
        <div v-if="!$props.noIcon" :class="['timeline-middle', item.middleClass]">
          <i :class="item.iconClass || $props.iconClass" />
        </div>
        <div v-if="item.desc" :class="['timeline-end timeline-box', item.descClass]">
          {{ item.desc }}
        </div>
        <hr
          v-if="i + 1 < $props.items?.length || $props.endLine"
          :class="item.lineEndClass"
          data-end-line
        />
      </li>
    </template>
  </ul>
</template>

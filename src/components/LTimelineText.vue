<script setup lang="ts">
withDefaults(
  defineProps<{
    items: {
      iconClass?: string
      label?: string
      labelClass?: string
      unstyledLabel?: boolean
      title?: string
      titleClass?: string
      unstyledTitle?: boolean
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
  }>(),
  {
    iconClass: 'bi bi-check-circle-fill',
    startLine: false,
    endLine: false,
    noIcon: false
  }
)
</script>

<template>
  <ul class="timeline timeline-vertical">
    <template v-for="(item, i) in $props.items" :key="i">
      <li>
        <hr v-if="i > 0 || $props.startLine" :class="item.lineStartClass" data-start-line />
        <div v-if="!$props.noIcon" :class="['timeline-middle', item.middleClass]">
          <i :class="item.iconClass || $props.iconClass" />
        </div>
        <div
          :class="[
            ' mb-10',
            {
              'timeline-start text-end ': i % 2 === 0,
              'timeline-end': i % 2 === 1
            }
          ]"
        >
          <time
            v-if="item.label"
            :class="[{ 'font-mono italic': !item.unstyledLabel }, item.labelClass]"
            >{{ item.label }}</time
          >
          <div
            v-if="item.title"
            :class="[{ 'text-lg font-black': !item.unstyledTitle }, item.titleClass]"
          >
            {{ item.title }}
          </div>
          <div :class="item.descClass">
            {{ item.desc }}
          </div>
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

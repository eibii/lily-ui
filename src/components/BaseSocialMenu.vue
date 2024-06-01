<script setup lang="ts">
import type { SocialMenu } from '@/@types/Props'

withDefaults(
  defineProps<{
    socialMenuTitle?: string
    socialMenu: SocialMenu[]
    center?: boolean
  }>(),
  {
    socialMenuTitle: '',
    center: false
  }
)
</script>

<template>
  <nav v-if="$props.socialMenu && $props.socialMenuTitle">
    <h6 v-if="socialMenuTitle" class="footer-title">{{ $props.socialMenuTitle }}</h6>
    <div
      :class="[
        'grid grid-flow-col gap-4 ',
        {
          'md:place-self-center md:justify-self-end': !$props.center
        }
      ]"
    >
      <template v-for="menu in $props.socialMenu" :key="menu">
        <a class="flex gap-2" :href="menu.link" v-bind="menu.target ? { target: menu.target } : {}">
          <span v-if="menu.svg" v-html="menu.svg" />
          <i v-else-if="menu.icon" :class="menu.icon" />
          <span v-if="menu.label">{{ menu.label }}</span>
        </a>
      </template>
    </div>
  </nav>
  <nav
    v-else
    :class="[
      'grid grid-flow-col gap-4 ',
      {
        'md:place-self-center md:justify-self-end': !$props.center
      }
    ]"
  >
    <template v-for="menu in $props.socialMenu" :key="menu">
      <a class="flex gap-2" :href="menu.link" v-bind="menu.target ? { target: menu.target } : {}">
        <span v-if="menu.svg" v-html="menu.svg" />
        <i v-else-if="menu.icon" :class="menu.icon" />
        <span v-if="menu.label">{{ menu.label }}</span>
      </a>
    </template>
  </nav>
</template>

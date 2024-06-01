<script setup lang="ts">
import type { SocialMenu } from '@/@types/Props'
import * as _ from 'lodash-es'

import BaseSocialMenu from './BaseSocialMenu.vue'

withDefaults(
  defineProps<{
    bgClass?: string
    center?: boolean
    copyright?: string
    socialMenuTitle?: string
    socialMenu?: SocialMenu[]
  }>(),
  {
    bgClass: 'bg-base-300 text-base-content',
    center: false,
    copyright: '',
    socialMenuTitle: undefined,
    socialMenu: () => []
  }
)
</script>

<template>
  <footer
    :class="[
      'footer',
      $props.bgClass,
      {
        'footer-center': $props.center
      }
    ]"
  >
    <slot />
    <aside v-if="$props.copyright" class="items-center grid-flow-col">
      <slot name="logo" />
      <p>{{ $props.copyright }}</p>
    </aside>
    <BaseSocialMenu
      v-if="$props.socialMenu"
      :socialMenuTitle="$props.socialMenuTitle"
      :socialMenu="$props.socialMenu"
    />
  </footer>
</template>

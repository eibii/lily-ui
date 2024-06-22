<script setup lang="ts">
import type { SocialMenu, ColMenu, Menu, FooterLogo, FooterNewsletter } from '../@types/Props'

import { ref } from 'vue'
import { BaseSocialMenu, BaseMenu, LInput, LButton } from './'

defineEmits<{
  (e: 'onClickMenu', menu: Menu): void
  (e: 'onClickLogo'): void
}>()
withDefaults(
  defineProps<{
    bgClass?: string
    center?: boolean
    logo?: FooterLogo
    copyright?: string
    socialMenuTitle?: string
    socialMenu?: SocialMenu[]
    collectionMenu?: ColMenu[]
    menuCol?: boolean
    newsletter?: FooterNewsletter
  }>(),
  {
    bgClass: 'bg-base-300 text-base-content',
    center: false,
    logo: undefined,
    copyright: '',
    socialMenuTitle: undefined,
    socialMenu: () => [],
    collectionMenu: () => [],
    menuCol: false,
    newsletter: undefined
  }
)
const email = ref('')
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
    <aside v-if="$props.logo">
      <div
        v-if="$props.logo.svg"
        :class="{ 'cursor-pointer': $props.logo.logoHover }"
        v-html="$props.logo.svg"
        @click="$emit('onClickLogo')"
        @keypress.enter="$emit('onClickLogo')"
      />
      <img
        v-else-if="$props.logo.imageSrc"
        :src="$props.logo.imageSrc"
        :class="[$props.logo.imageClass, { 'cursor-pointer': $props.logo.logoHover }]"
        :alt="$props.logo.imageAlt"
        @click="$emit('onClickLogo')"
        @keypress.enter="$emit('onClickLogo')"
      />
      <p v-if="$props.logo.textHtml" v-html="$props.logo.textHtml" />
    </aside>
    <aside v-if="$props.copyright" class="items-center grid-flow-col">
      <slot name="logo" />
      <p>{{ $props.copyright }}</p>
    </aside>
    <BaseSocialMenu
      v-if="$props.socialMenu"
      :center="$props.center"
      :socialMenuTitle="$props.socialMenuTitle"
      :socialMenu="$props.socialMenu"
    />
    <template v-for="colMenu in collectionMenu" :key="colMenu">
      <BaseMenu :col="$props.menuCol" :colMenu="colMenu" @onClick="$emit('onClickMenu', $event)" />
    </template>
    <form v-if="$props.newsletter">
      <h6 v-if="$props.newsletter.title" class="footer-title">{{ $props.newsletter.title }}</h6>
      <fieldset class="form-control w-80">
        <label class="label">
          <span class="label-text">{{ $props.newsletter.label }}</span>
        </label>
        <div class="join">
          <LInput
            outline
            v-model="email"
            type="email"
            class="join-item"
            v-bind="{
              placeholder: $props.newsletter.placeholder
            }"
          />
          <LButton
            class="join-item"
            severity="primary"
            :label="$props.newsletter.btnText"
            @click="$props.newsletter.onSubmit(email)"
            @keypress.enter="$props.newsletter.onSubmit(email)"
          />
        </div>
      </fieldset>
    </form>
  </footer>
</template>

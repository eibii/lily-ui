<script setup lang="ts">
import type {
  SizeBase,
  ShapeBase,
  Effect,
  Severity,
  PositionDropdown,
  AlignDropdown
} from '../@types/Props'

type DropdownOption = {
  disabled?: boolean
  icon?: string
  iconRight?: string
  label: string
  value: string | number
  active?: boolean
}

import { ref } from 'vue'

import { LButton } from '.'

const emit = defineEmits<{
  (e: 'onClickOption', option: DropdownOption): void
}>()
withDefaults(
  defineProps<{
    widthClass?: string
    label?: string
    options?: DropdownOption[]
    optionsClass?: string
    optionClass?: string
    icon?: string
    iconRight?: string
    disabled?: boolean
    loading?: boolean
    open?: boolean
    hover?: boolean
    position?: PositionDropdown
    align?: AlignDropdown
    size?: SizeBase
    shape?: ShapeBase
    effect?: Effect
    severity?: Severity
  }>(),
  {
    widthClass: 'w-52',
    label: '',
    options: () => [],
    optionsClass: 'bg-base-200',
    optionClass: '',
    icon: '',
    iconRight: '',
    disabled: false,
    loading: false,
    open: false,
    hover: false,
    position: 'default',
    align: 'default',
    size: 'default',
    shape: 'default',
    effect: 'default',
    severity: 'default'
  }
)
const dropdownList = ref<HTMLElement | null>(null)
const onClick = (option: DropdownOption) => {
  if (option.disabled) return

  if (dropdownList.value) {
    dropdownList.value.blur()
  }

  emit('onClickOption', option)
}
</script>

<template>
  <div
    :class="[
      'dropdown',
      $props.position,
      $props.align,
      {
        'dropdown-hover': $props.hover,
        'dropdown-open': $props.open,
        'pointer-events-none': $props.disabled
      }
    ]"
  >
    <LButton
      :class="{ 'min-w-[80px]': $props.shape === 'circle' || $props.shape === 'square' }"
      :size="$props.size"
      :shape="$props.shape"
      :effect="$props.effect"
      :severity="$props.severity"
    >
      <div class="flex gap-2">
        <i v-if="$props.icon" :class="['flex-none self-center', $props.icon]" />
        <span class="flex-1 self-center">{{ $props.label }}</span>
        <i v-if="$props.iconRight" :class="['flex-none self-center', $props.iconRight]" />
        <div class="flex-none self-center">
          <svg
            class="rotate-180"
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="stroke-current"
              d="M6 15L12 9L18 15"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </LButton>
    <ul
      v-if="!$props.disabled"
      ref="dropdownList"
      tabindex="0"
      :class="[
        'p-2 shadow menu dropdown-content z-[1] rounded-box',
        $props.optionsClass,
        $props.widthClass
      ]"
    >
      <li v-if="$props.loading" class="p-1">
        <i class="self-center loading loading-spinner" />
      </li>
      <template v-else v-for="(option, i) in $props.options" :key="i">
        <li>
          <a
            :class="[
              'flex gap-2',
              $props.optionClass,
              { 'pointer-events-none': option.disabled, active: option.active }
            ]"
            @click="onClick(option)"
            @keypress.enter="onClick(option)"
          >
            <i class="flex-none self-center" v-if="option.icon" :class="option.icon" />
            <span class="flex-1 self-center">{{ option.label }}</span>
            <i class="flex-none self-center" v-if="option.iconRight" :class="option.iconRight" />
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type DropdownOption = {
  disabled?: boolean
  icon?: string
  iconRight?: string
  label: string
  value: string
}

const emit = defineEmits(['onClickOption'])
const props = withDefaults(
  defineProps<{
    width?: string
    label: string
    options?: DropdownOption[]
    icon?: string
    iconRight?: string
    disabled?: boolean
    loading?: boolean
    open?: boolean
    hover?: boolean
    position?: 'default' | 'dropdown-top' | 'dropdown-bottom' | 'dropdown-end'
    align?: 'default' | 'dropdown-left' | 'dropdown-right'
  }>(),
  {
    width: 'w-52',
    label: '',
    options: () => [],
    icon: '',
    iconRight: '',
    disabled: false,
    loading: false,
    open: false,
    hover: false,
    position: 'default',
    align: 'default'
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
      props.position,
      props.align,
      {
        'dropdown-hover': props.hover,
        'dropdown-open': props.open,
        'pointer-events-none': props.disabled
      }
    ]"
  >
    <div tabindex="0" role="button" class="btn m-1 flex gap-2">
      <i v-if="props.icon" :class="['flex-none self-center', props.icon]" />
      <span class="flex-1 self-center">{{ props.label }}</span>
      <i v-if="props.iconRight" :class="['flex-none self-center', props.iconRight]" />
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
    <ul
      v-if="!props.disabled"
      ref="dropdownList"
      tabindex="0"
      :class="['p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box', props.width]"
    >
      <li v-if="props.loading" class="p-1">
        <i class="self-center loading loading-spinner" />
      </li>
      <template v-else v-for="(option, i) in props.options" :key="i">
        <li>
          <a
            :class="['flex gap-2', { 'pointer-events-none': option.disabled }]"
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

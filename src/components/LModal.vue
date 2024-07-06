<script setup lang="ts">
import { watch, onMounted } from 'vue'
import * as _ from 'lodash-es'

import { LButton } from '.'

const emit = defineEmits<{
  (e: 'update:modelValue', model: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    closable?: boolean
    closeButton?: boolean
    responsive?: boolean
    widthClass?: string
    unstyledTitle?: boolean
  }>(),
  {
    closable: true,
    closeButton: true,
    responsive: true,
    widthClass: '',
    unstyledTitle: false
  }
)
const modalId = `modal_${_.uniqueId()}`
const onClose = () => {
  emit('update:modelValue', false)
  const el: any = document.getElementById(modalId)
  el?.close()
}

watch(
  () => props.modelValue,
  (show) => {
    const el: any = document.getElementById(modalId)

    if (show) {
      el?.showModal()
    } else {
      el?.close()
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      emit('update:modelValue', false)
    }
  })
})
</script>

<template>
  <dialog
    :id="modalId"
    :class="[
      'modal',
      {
        'modal-bottom sm:modal-middle': props.responsive
      }
    ]"
  >
    <div :class="['modal-box', props.widthClass]">
      <form v-if="props.closeButton" method="dialog">
        <LButton
          size="sm"
          shape="circle"
          effect="ghost"
          class="absolute right-2 top-2"
          @click="onClose"
          @keypress.enter="onClose"
        >
          ✕
        </LButton>
      </form>
      <h3 :class="{ 'font-bold text-lg': !props.unstyledTitle }">
        <slot name="title" />
      </h3>
      <slot />
      <div class="modal-action">
        <form method="dialog">
          <slot name="action" :onClose="onClose" />
        </form>
      </div>
    </div>
    <form v-if="props.closable" method="dialog" class="modal-backdrop">
      <button @click="onClose" @keypress.enter="onClose">close</button>
    </form>
  </dialog>
</template>

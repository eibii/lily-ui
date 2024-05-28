<script setup lang="ts">
type ModelValue = any[]

import { ref, watch, useAttrs, onMounted } from 'vue'

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: ModelValue): void
}>()
const props = withDefaults(
  defineProps<{
    modelValue?: ModelValue
    value?: any
    disabled?: boolean
  }>(),
  {
    modelValue: () => [],
    value: true,
    disabled: false
  }
)
const $attrs = useAttrs()
const fieldValue = ref()
const idx = ref()

watch(fieldValue, (newValue) => {
  if (newValue) {
    const newModelValue = [...props.modelValue, props.value]
    emit('update:modelValue', newModelValue)
    idx.value = newModelValue.length - 1
  } else {
    emit(
      'update:modelValue',
      props.modelValue.filter((v, i) => i !== idx.value)
    )

    idx.value = undefined
  }
})

onMounted(() => {
  const key = props.modelValue.find((v) => v === props.value)

  if (key) {
    idx.value = props.modelValue.indexOf(key)
  }

  fieldValue.value = key ? true : false
})
</script>

<template>
  <input
    type="checkbox"
    v-model="fieldValue"
    :class="['checkbox']"
    :disabled="$props.disabled"
    v-bind="$attrs"
  />
</template>

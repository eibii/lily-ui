<script setup lang="ts">
withDefaults(
  defineProps<{
    aspect?:
      | 'default'
      | 'auto'
      | 'square'
      | 'video'
      | '16/9'
      | '16/4'
      | '4/3'
      | '1/1'
      | '3/4'
      | '9/16'
      | '4/16'
      | '3/16'
      | '2/16'
      | '1/16'
  }>(),
  {
    aspect: 'default'
  }
)
</script>

<template>
  <div
    :class="[
      'diff',
      {
        'aspect-auto': aspect === 'default',
        'aspect-square': aspect === 'square',
        'aspect-video': aspect === 'video',
        'aspect-[16/9]': aspect === '16/9',
        'aspect-[16/4]': aspect === '16/4',
        'aspect-[4/3]': aspect === '4/3',
        'aspect-[1/1]': aspect === '1/1',
        'aspect-[3/4]': aspect === '3/4',
        'aspect-[9/16]': aspect === '9/16',
        'aspect-[4/16]': aspect === '4/16',
        'aspect-[3/16]': aspect === '3/16',
        'aspect-[2/16]': aspect === '2/16',
        'aspect-[1/16]': aspect === '1/16'
      }
    ]"
  >
    <div class="diff-item-1">
      <slot name="item-1" />
    </div>
    <div class="diff-item-2">
      <slot name="item-2" />
    </div>
    <div class="diff-resizer"></div>
  </div>
</template>

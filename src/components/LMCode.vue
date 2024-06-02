<script setup lang="ts">
withDefaults(
  defineProps<{
    domain?: string
    contentClass?: string
  }>(),
  {
    domain: 'https://lilyui.com',
    contentClass: 'flex justify-center px-4 py-16'
  }
)
</script>

<template>
  <div class="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre>
  </div>
</template>

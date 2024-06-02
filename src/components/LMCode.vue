<script setup lang="ts">
import type { Command } from '../@types/Props'

withDefaults(
  defineProps<{
    commands: Command[]
  }>(),
  {}
)
</script>

<template>
  <div class="mockup-code">
    <template v-for="command in $props.commands" :key="command">
      <pre
        :class="{
          'text-success': command.severity === 'success' && !command.severityBg,
          'bg-success text-success-content': command.severity === 'success' && command.severityBg,
          'text-warning': command.severity === 'warning' && !command.severityBg,
          'bg-warning text-warning-content': command.severity === 'warning' && command.severityBg,
          'text-error': command.severity === 'danger' && !command.severityBg,
          'bg-error text-error-content': command.severity === 'danger' && command.severityBg,
          'text-info': command.severity === 'info' && !command.severityBg,
          'bg-info text-info-content': command.severity === 'info' && command.severityBg
        }"
        v-bind="{ 'data-prefix': command.prefix }"
      ><code>{{ command.code }}</code></pre>
    </template>
  </div>
</template>

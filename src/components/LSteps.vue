<script setup lang="ts">
type Step = {
  label: string
  dataContent?: string
  iconClass?: string
  active?: boolean
  severity?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral'
}

withDefaults(
  defineProps<{
    steps: Step[]
    vertical?: boolean
    severity?:
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'neutral'
  }>(),
  {
    vertical: false,
    severity: undefined
  }
)
</script>

<template>
  <ul :class="['steps', { 'steps-vertical': $props.vertical }]">
    <li
      v-for="(step, i) in $props.steps"
      :key="i"
      :class="[
        'step',
        {
          'step-primary':
            (step.severity === 'primary' || $props.severity === 'primary') && step.active,
          'step-secondary':
            (step.severity === 'secondary' || $props.severity === 'secondary') && step.active,
          'step-accent':
            (step.severity === 'accent' || $props.severity === 'accent') && step.active,
          'step-info': (step.severity === 'info' || $props.severity === 'info') && step.active,
          'step-success':
            (step.severity === 'success' || $props.severity === 'success') && step.active,
          'step-warning':
            (step.severity === 'warning' || $props.severity === 'warning') && step.active,
          'step-error': (step.severity === 'danger' || $props.severity === 'danger') && step.active,
          'step-neutral':
            (step.severity === 'neutral' || $props.severity === 'neutral') && step.active
        }
      ]"
      v-bind="step?.dataContent ? { 'data-content': step.dataContent } : {}"
    >
      <div class="flex gap-2">
        <i v-if="step.iconClass" :class="['self-center', step.iconClass]" />
        <span class="self-center">{{ step.label }}</span>
      </div>
    </li>
  </ul>
</template>

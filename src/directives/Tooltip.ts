import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const tooltipEl = document.createElement('div')
    tooltipEl.classList.add('tooltip')

    if (binding.modifiers.open) {
      tooltipEl.classList.add('tooltip-open')
    }

    if (binding.modifiers.top) {
      tooltipEl.classList.add('tooltip-top')
    }

    if (binding.modifiers.right) {
      tooltipEl.classList.add('tooltip-right')
    }

    if (binding.modifiers.bottom) {
      tooltipEl.classList.add('tooltip-bottom')
    }

    if (binding.modifiers.left) {
      tooltipEl.classList.add('tooltip-left')
    }

    if (binding.modifiers.primary) {
      tooltipEl.classList.add('tooltip-primary')
    }

    if (binding.modifiers.secondary) {
      tooltipEl.classList.add('tooltip-secondary')
    }

    if (binding.modifiers.accent) {
      tooltipEl.classList.add('tooltip-accent')
    }

    if (binding.modifiers.info) {
      tooltipEl.classList.add('tooltip-info')
    }

    if (binding.modifiers.success) {
      tooltipEl.classList.add('tooltip-success')
    }

    if (binding.modifiers.warning) {
      tooltipEl.classList.add('tooltip-warning')
    }

    if (binding.modifiers.danger) {
      tooltipEl.classList.add('tooltip-error')
    }

    tooltipEl.setAttribute('data-tip', binding.value)
    el.parentNode?.insertBefore(tooltipEl, el)
    tooltipEl.appendChild(el)
  }
}

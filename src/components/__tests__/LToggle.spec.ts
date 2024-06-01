import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Toggle from '../LToggle.vue'

describe('Toggle', () => {
  it('renders a toggle with default props', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.find('.toggle').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: undefined,
      labelClass: '',
      modelValue: false,
      disabled: false,
      size: 'default',
      severity: 'default'
    })
  })

  it('renders a toggle with custom props', () => {
    const wrapper = mount(Toggle, {
      props: {
        modelValue: true,
        label: undefined,
        labelClass: '',
        disabled: false,
        size: 'lg',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.toggle').exists()).toBe(true)
    expect(wrapper.find('.toggle-error').exists()).toBe(true)
    expect(wrapper.find('.toggle-lg').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: true,
      label: undefined,
      labelClass: '',
      disabled: false,
      size: 'lg',
      severity: 'danger'
    })
  })

  it('renders a toggle with label slot', () => {
    const wrapper = mount(Toggle, {
      slots: {
        label: '<div>Slot label</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.toggle').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label')
  })
})

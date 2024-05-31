import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Range from '../LRange.vue'

describe('Range', () => {
  it('renders a range with default props', () => {
    const wrapper = mount(Range)

    expect(wrapper.find('.range').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: 0,
      min: 0,
      max: 100,
      step: 1,
      disabled: false,
      size: 'default',
      severity: 'default'
    })
  })

  it('renders a range with custom props', () => {
    const wrapper = mount(Range, {
      props: {
        modelValue: 10,
        min: 0,
        max: 100,
        step: 10,
        disabled: false,
        size: 'lg',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.range').exists()).toBe(true)
    expect(wrapper.find('.range-error').exists()).toBe(true)
    expect(wrapper.find('.range-lg').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: 10,
      min: 0,
      max: 100,
      step: 10,
      disabled: false,
      size: 'lg',
      severity: 'danger'
    })
  })
})

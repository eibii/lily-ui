import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Progress from '../LProgress.vue'

describe('Progress', () => {
  it('renders a progress with default props', () => {
    const wrapper = mount(Progress)

    expect(wrapper.find('.progress').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: undefined,
      max: 100,
      widthClass: 'w-full',
      severity: 'default'
    })
  })

  it('renders a progress with custom props', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 25,
        max: 120,
        widthClass: 'w-56',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.progress').exists()).toBe(true)
    expect(wrapper.find('.w-56').exists()).toBe(true)
    expect(wrapper.find('.progress-error').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: 25,
      max: 120,
      widthClass: 'w-56',
      severity: 'danger'
    })
  })
})

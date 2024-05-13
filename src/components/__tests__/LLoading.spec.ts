import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Loading from '../LLoading.vue'

describe('Loading', () => {
  it('renders a loading with default props', () => {
    const wrapper = mount(Loading)

    expect(wrapper.find('.loading').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      type: 'default',
      size: 'default',
      severity: 'default'
    })
  })

  it('renders a loading with custom props', () => {
    const wrapper = mount(Loading, {
      props: {
        type: 'ball',
        size: 'lg',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.loading').exists()).toBe(true)
    expect(wrapper.find('.loading-ball').exists()).toBe(true)
    expect(wrapper.find('.text-error').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      type: 'ball',
      size: 'lg',
      severity: 'danger'
    })
  })
})

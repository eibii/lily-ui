import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Divider from '../LDivider.vue'

describe('Divider', () => {
  it('renders a divider with default props', () => {
    const wrapper = mount(Divider)

    expect(wrapper.find('.divider').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      text: '',
      horizontal: false,
      severity: 'default',
      position: 'default'
    })
  })

  it('renders a divider with custom props', () => {
    const wrapper = mount(Divider, {
      props: {
        text: 'OR',
        horizontal: true,
        severity: 'danger',
        position: 'start'
      }
    })

    expect(wrapper.find('.divider').exists()).toBe(true)
    expect(wrapper.find('.divider-horizontal').exists()).toBe(true)
    expect(wrapper.find('.divider-error').exists()).toBe(true)
    expect(wrapper.find('.divider-start').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      text: 'OR',
      horizontal: true,
      severity: 'danger',
      position: 'start'
    })
  })
})

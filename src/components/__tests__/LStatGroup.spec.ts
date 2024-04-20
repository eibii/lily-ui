import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import StatGroup from '../LStatGroup.vue'

describe('StatGroup', () => {
  it('renders a stat-group with default props', () => {
    const wrapper = mount(StatGroup)

    expect(wrapper.find('.stats').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      shadow: true,
      vertical: false
    })
  })
  it('renders a stat-group with custom props', () => {
    const wrapper = mount(StatGroup, {
      props: {
        shadow: false,
        vertical: true
      }
    })

    expect(wrapper.find('.stats').exists()).toBe(true)
    expect(wrapper.find('.shadow').exists()).toBe(false)
    expect(wrapper.find('.stats-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      shadow: false,
      vertical: true
    })
  })
  it('render default slot', () => {
    const wrapper = mount(StatGroup, {
      slots: {
        default: 'Slot default'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

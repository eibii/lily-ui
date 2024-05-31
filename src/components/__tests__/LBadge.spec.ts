import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Badge from '../LBadge.vue'

describe('Badge', () => {
  it('renders a badge with default props', () => {
    const wrapper = mount(Badge)

    expect(wrapper.find('.badge').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      size: 'default',
      effect: 'default',
      severity: 'default',
      outline: false
    })
  })
  it('renders a avatar with custom props', () => {
    const wrapper = mount(Badge, {
      props: {
        size: 'lg',
        effect: 'ghost',
        severity: 'success',
        outline: true
      }
    })

    expect(wrapper.find('.badge').exists()).toBe(true)
    expect(wrapper.find('.badge-outline').exists()).toBe(true)
    expect(wrapper.find('.badge-success').exists()).toBe(true)
    expect(wrapper.find('.badge-ghost').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      size: 'lg',
      effect: 'ghost',
      severity: 'success',
      outline: true
    })
  })
  it('render default slot', () => {
    const wrapper = mount(Badge, {
      slots: {
        default: 'Slot default'
      }
    })

    expect(wrapper.text()).toContain('Slot default')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Kbd from '../LKbd.vue'

describe('Kbd', () => {
  it('renders a kbd with default props', () => {
    const wrapper = mount(Kbd)

    expect(wrapper.find('.kbd').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      size: 'default'
    })
  })
  it('renders a kbd with custom props', () => {
    const wrapper = mount(Kbd, {
      props: {
        size: 'lg'
      }
    })

    expect(wrapper.find('.kbd').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      size: 'lg'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(Kbd, {
      slots: {
        default: 'Slot default'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Artboard from '../LArtboard.vue'

describe('Artboard', () => {
  it('renders a artboard with default props', () => {
    const wrapper = mount(Artboard)

    expect(wrapper.find('.artboard').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'artboard-demo',
      size: 'phone1',
      horizontal: false
    })
  })

  it('renders a artboard with custom props', () => {
    const wrapper = mount(Artboard, {
      props: {
        bgClass: 'bg-base-200',
        size: 'phone3',
        horizontal: true
      }
    })

    expect(wrapper.find('.artboard').exists()).toBe(true)
    expect(wrapper.find('.phone-3').exists()).toBe(true)
    expect(wrapper.find('.artboard-horizontal').exists()).toBe(true)
    expect(wrapper.text()).toContain('736x414')
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-200',
      size: 'phone3',
      horizontal: true
    })
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import BottomNav from '../LBottomNav.vue'

describe('BottomNav', () => {
  const items = [
    {
      iconClass: 'bi bi-house'
    },
    {
      iconClass: 'bi bi-info-circle',
      active: true,
      disabled: true
    },
    {
      iconClass: 'bi bi-bar-chart'
    }
  ]

  it('renders a bottom-nav with default props', () => {
    const wrapper = mount(BottomNav, {
      props: {
        items
      }
    })

    expect(wrapper.find('.btm-nav').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      itemsClass: '',
      size: 'md'
    })
  })
  it('renders a bottom-nav with custom props', () => {
    const wrapper = mount(BottomNav, {
      props: {
        items,
        itemsClass: 'text-gray-500',
        size: 'lg'
      }
    })

    expect(wrapper.find('.btm-nav').exists()).toBe(true)
    expect(wrapper.find('.btm-nav-lg').exists()).toBe(true)
    const elItems = wrapper.findAll('button')
    expect(elItems.length).toBe(3)
    expect(elItems[1].attributes('class')).toContain('active')
    expect(wrapper.props()).toEqual({
      items,
      itemsClass: 'text-gray-500',
      size: 'lg'
    })
  })
  it('is disabled item', () => {
    const wrapper = mount(BottomNav, { props: { items } })
    expect(wrapper.findAll('button')[1].attributes('disabled')).toBe('')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Navbar from '../LNavbar.vue'

describe('Navbar', () => {
  it('renders a navbar with default props', () => {
    const wrapper = mount(Navbar)

    expect(wrapper.find('.navbar').exists()).toBe(true)
    expect(wrapper.find('.bg-base-100').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'default',
      unstyledBg: false
    })
  })
  it('renders a navbar with custom props', () => {
    const wrapper = mount(Navbar, {
      props: {
        bgClass: 'primary',
        unstyledBg: false
      }
    })

    expect(wrapper.find('.navbar').exists()).toBe(true)
    expect(wrapper.find('.bg-primary.text-primary-content.shadow-xl.rounded-box').exists()).toBe(
      true
    )
    expect(wrapper.props()).toEqual({
      bgClass: 'primary',
      unstyledBg: false
    })
  })
  it('renders a navbar with slots', () => {
    const wrapper = mount(Navbar, {
      slots: {
        default: 'default slot',
        start: 'start slot',
        center: 'center slot',
        end: 'end slot'
      }
    })

    expect(wrapper.find('.navbar').exists()).toBe(true)
    expect(wrapper.text()).toContain('default slot')
    expect(wrapper.find('.navbar-start').text()).toBe('start slot')
    expect(wrapper.find('.navbar-center').text()).toBe('center slot')
    expect(wrapper.find('.navbar-end').text()).toBe('end slot')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Countdown from '../LCountdown.vue'

describe('Countdown', () => {
  it('renders a countdown with default props', () => {
    const wrapper = mount(Countdown, {
      props: {
        value: 30
      }
    })

    expect(wrapper.find('.countdown-number').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: 30,
      widthClass: 'w-20',
      delay: 1000,
      animation: 'default'
    })
  })
  it('renders a countdown with custom props', () => {
    const wrapper = mount(Countdown, {
      props: {
        value: 15,
        widthClass: 'w-10',
        delay: 100,
        animation: 'jump'
      }
    })

    expect(wrapper.find('.countdown-number').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: 15,
      widthClass: 'w-10',
      delay: 100,
      animation: 'jump'
    })
  })
})

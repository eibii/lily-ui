import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import CountdownTime from '../LCountdownTime.vue'

describe('CountdownTime', () => {
  it('renders a countdown-time with default props', () => {
    const wrapper = mount(CountdownTime, {
      props: {
        seconds: 30
      }
    })

    expect(wrapper.find('.countdown-time').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: 30,
      delay: 1000,
      textDays: '',
      textHours: '',
      textMinutes: '',
      textSeconds: '',
      layout: 'default',
      animation: 'default'
    })
  })
  it('renders a countdown-time with custom props', () => {
    const wrapper = mount(CountdownTime, {
      props: {
        days: 1,
        hours: 4,
        minutes: 25,
        seconds: 10,
        delay: 1000,
        textDays: 'Days',
        textHours: 'Hours',
        textMinutes: 'Minutes',
        textSeconds: 'Seconds',
        layout: 'boxes',
        animation: 'fade'
      }
    })

    expect(wrapper.find('.countdown-time').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      days: 1,
      hours: 4,
      minutes: 25,
      seconds: 10,
      delay: 1000,
      textDays: 'Days',
      textHours: 'Hours',
      textMinutes: 'Minutes',
      textSeconds: 'Seconds',
      layout: 'boxes',
      animation: 'fade'
    })
  })
})

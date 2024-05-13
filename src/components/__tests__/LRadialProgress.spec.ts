import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import RadialProgress from '../LRadialProgress.vue'

describe('RadialProgress', () => {
  it('renders a radial-progress with default props', () => {
    const wrapper = mount(RadialProgress, {
      props: {
        value: 50
      }
    })

    expect(wrapper.find('.radial-progress').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: 50,
      size: '',
      thickness: '',
      severity: 'default'
    })
  })

  it('renders a radial-progress with custom props', () => {
    const wrapper = mount(RadialProgress, {
      props: {
        value: 30,
        size: '12rem',
        thickness: '8px',
        severity: 'success'
      }
    })

    expect(wrapper.find('.radial-progress').exists()).toBe(true)
    expect(wrapper.find('.radial-progress').attributes('style')).toBe(
      '--value: 30; --size: 12rem; --thickness: 8px;'
    )
    expect(wrapper.find('.text-success').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      value: 30,
      size: '12rem',
      thickness: '8px',
      severity: 'success'
    })
  })
})

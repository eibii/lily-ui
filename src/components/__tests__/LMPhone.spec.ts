import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import LMPhone from '../LMPhone.vue'

describe('LMPhone', () => {
  it('renders a mockPhone with default props', () => {
    const wrapper = mount(LMPhone)

    expect(wrapper.find('.mockup-phone').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: undefined,
      size: 'phone1',
      screenSize: undefined
    })
  })

  it('renders a mockPhone with custom props', () => {
    const wrapper = mount(LMPhone, {
      props: {
        bgClass: undefined,
        size: 'phone3',
        screenSize: false
      }
    })

    expect(wrapper.find('.mockup-phone').exists()).toBe(true)
    expect(wrapper.find('.phone-3').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: undefined,
      size: 'phone3',
      screenSize: false
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(LMPhone, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

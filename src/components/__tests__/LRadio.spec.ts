import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Radio from '../LRadio.vue'

describe('Radio', () => {
  it('renders a radio with default props', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'on'
      }
    })

    expect(wrapper.find('.radio').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: '',
      value: 'on',
      label: undefined,
      labelClass: '',
      disabled: false,
      size: 'default',
      severity: 'default'
    })
  })

  it('renders a radio with custom props', () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: 'on',
        value: 'off',
        label: undefined,
        labelClass: '',
        disabled: false,
        size: 'lg',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.radio').exists()).toBe(true)
    expect(wrapper.find('.radio-error').exists()).toBe(true)
    expect(wrapper.find('.radio-lg').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: 'on',
      value: 'off',
      label: undefined,
      labelClass: '',
      disabled: false,
      size: 'lg',
      severity: 'danger'
    })
  })

  it('renders a radio with label slot', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'on'
      },
      slots: {
        label: '<div>Slot label</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.radio').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label')
  })
})

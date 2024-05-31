import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Checkbox from '../LCheckbox.vue'

describe('Checkbox', () => {
  it('renders a checkbox with default props', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.find('.checkbox').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: undefined,
      labelClass: '',
      modelValue: false,
      value: true,
      disabled: false,
      size: 'default',
      severity: 'default'
    })
  })

  it('renders a checkbox with custom props', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: undefined,
        labelClass: '',
        modelValue: true,
        value: true,
        disabled: false,
        size: 'lg',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.checkbox').exists()).toBe(true)
    expect(wrapper.find('.checkbox-error').exists()).toBe(true)
    expect(wrapper.find('.checkbox-lg').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: undefined,
      labelClass: '',
      modelValue: true,
      value: true,
      disabled: false,
      size: 'lg',
      severity: 'danger'
    })
  })

  it('renders a checkbox with label slot', () => {
    const wrapper = mount(Checkbox, {
      slots: {
        label: '<div>Slot label</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.checkbox').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label')
  })
})

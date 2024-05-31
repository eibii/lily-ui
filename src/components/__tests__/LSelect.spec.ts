import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Select from '../LSelect.vue'

describe('Select', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]

  it('renders a select with default props', () => {
    const wrapper = mount(Select, {
      props: {
        options
      }
    })

    expect(wrapper.find('.select').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: {
        value: '',
        label: ''
      },
      bgClass: 'bg-base-200',
      widthClass: 'w-full',
      labelUp: undefined,
      labelUpAlt: undefined,
      labelDown: undefined,
      pleaceholder: 'Select an option',
      options,
      disabled: false,
      loading: false,
      outline: false,
      shape: 'default',
      size: 'default',
      effect: 'default',
      severity: 'default'
    })
  })

  it('renders a select with custom props', () => {
    const wrapper = mount(Select, {
      props: {
        bgClass: 'bg-base-500',
        widthClass: 'w-full',
        modelValue: { value: '2', label: 'Option 2' },
        labelUp: 'Pick a file',
        labelUpAlt: undefined,
        labelDown: undefined,
        pleaceholder: 'Select an option',
        options,
        disabled: false,
        loading: false,
        outline: false,
        shape: 'circle',
        size: 'lg',
        effect: 'ghost',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.select').exists()).toBe(true)
    expect(wrapper.find('.bg-base-500').exists()).toBe(true)
    expect(wrapper.find('.select-error').exists()).toBe(false)
    expect(wrapper.find('.select-lg').exists()).toBe(true)
    expect(wrapper.find('.select-ghost').exists()).toBe(true)
    expect(wrapper.text()).toContain('Pick a file')
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-500',
      widthClass: 'w-full',
      modelValue: { value: '2', label: 'Option 2' },
      labelUp: 'Pick a file',
      labelUpAlt: undefined,
      labelDown: undefined,
      pleaceholder: 'Select an option',
      options,
      disabled: false,
      loading: false,
      outline: false,
      shape: 'circle',
      size: 'lg',
      effect: 'ghost',
      severity: 'danger'
    })
  })

  it('renders a select with label slot', () => {
    const wrapper = mount(Select, {
      slots: {
        labelUp: '<div>Slot label up</div>',
        labelDown: '<div>Slot label down</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.select').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label up')
    expect(wrapper.text()).toContain('Slot label down')
  })
})

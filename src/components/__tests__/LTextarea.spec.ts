import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Textarea from '../LTextarea.vue'

describe('Textarea', () => {
  it('renders a textarea with default props', () => {
    const wrapper = mount(Textarea)

    expect(wrapper.find('.textarea').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: '',
      bgClass: 'bg-base-200',
      widthClass: 'w-full',
      labelUp: undefined,
      labelUpAlt: undefined,
      labelDown: undefined,
      label: '',
      icon: '',
      iconRight: '',
      outline: false,
      disabled: false,
      loading: false,
      size: 'default',
      shape: 'default',
      effect: 'default',
      severity: 'default'
    })
  })

  it('renders a textarea with custom props', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'Name',
        bgClass: 'bg-base-500',
        widthClass: 'w-full',
        labelUp: 'Pick a file',
        labelUpAlt: undefined,
        labelDown: undefined,
        label: '',
        icon: '',
        iconRight: '',
        outline: false,
        disabled: false,
        loading: false,
        size: 'lg',
        shape: 'default',
        effect: 'ghost',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.textarea').exists()).toBe(true)
    expect(wrapper.find('.bg-base-500').exists()).toBe(true)
    expect(wrapper.find('.textarea-error').exists()).toBe(false)
    expect(wrapper.find('.textarea-lg').exists()).toBe(true)
    expect(wrapper.find('.textarea-ghost').exists()).toBe(true)
    expect(wrapper.text()).toContain('Pick a file')
    expect(wrapper.props()).toEqual({
      modelValue: 'Name',
      bgClass: 'bg-base-500',
      widthClass: 'w-full',
      labelUp: 'Pick a file',
      labelUpAlt: undefined,
      labelDown: undefined,
      label: '',
      icon: '',
      iconRight: '',
      outline: false,
      disabled: false,
      loading: false,
      size: 'lg',
      shape: 'default',
      effect: 'ghost',
      severity: 'danger'
    })
  })

  it('renders a textarea with label slot', () => {
    const wrapper = mount(Textarea, {
      slots: {
        labelUp: '<div>Slot label up</div>',
        labelDown: '<div>Slot label down</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.textarea').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label up')
    expect(wrapper.text()).toContain('Slot label down')
  })
})

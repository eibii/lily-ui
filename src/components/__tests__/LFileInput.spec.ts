import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import FileInput from '../LFileInput.vue'

describe('FileInput', () => {
  it('renders a fileInput with default props', () => {
    const wrapper = mount(FileInput)

    expect(wrapper.find('.file-input').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-200',
      widthClass: 'w-full',
      labelUp: undefined,
      labelUpAlt: undefined,
      labelDown: undefined,
      outline: false,
      disabled: false,
      size: 'default',
      effect: 'default',
      severity: 'default'
    })
  })

  it('renders a fileInput with custom props', () => {
    const wrapper = mount(FileInput, {
      props: {
        bgClass: 'bg-base-500',
        widthClass: 'w-full',
        labelUp: 'Pick a file',
        labelUpAlt: undefined,
        labelDown: undefined,
        outline: false,
        disabled: false,
        size: 'lg',
        effect: 'ghost',
        severity: 'danger'
      }
    })

    expect(wrapper.find('.file-input').exists()).toBe(true)
    expect(wrapper.find('.bg-base-500').exists()).toBe(true)
    expect(wrapper.find('.file-input-error').exists()).toBe(false)
    expect(wrapper.find('.file-input-lg').exists()).toBe(true)
    expect(wrapper.find('.file-input-ghost').exists()).toBe(true)
    expect(wrapper.text()).toContain('Pick a file')
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-500',
      widthClass: 'w-full',
      labelUp: 'Pick a file',
      labelUpAlt: undefined,
      labelDown: undefined,
      outline: false,
      disabled: false,
      size: 'lg',
      effect: 'ghost',
      severity: 'danger'
    })
  })

  it('renders a fileInput with label slot', () => {
    const wrapper = mount(FileInput, {
      slots: {
        labelUp: '<div>Slot label up</div>',
        labelDown: '<div>Slot label down</div>'
      }
    })

    expect(wrapper.find('.form-control').exists()).toBe(true)
    expect(wrapper.find('.file-input').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot label up')
    expect(wrapper.text()).toContain('Slot label down')
  })
})

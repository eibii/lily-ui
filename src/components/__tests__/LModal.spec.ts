import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Modal from '../LModal.vue'

describe('Modal', () => {
  it('renders a modal with default props', () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: false
      }
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: false,
      closable: true,
      closeButton: true,
      responsive: true,
      widthClass: '',
      unstyledTitle: false
    })
  })
  it('renders a modal with custom props', () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true,
        closable: false,
        closeButton: false,
        responsive: false,
        widthClass: 'w-48',
        unstyledTitle: true
      }
    })
    expect(wrapper.props()).toEqual({
      modelValue: true,
      closable: false,
      closeButton: false,
      responsive: false,
      widthClass: 'w-48',
      unstyledTitle: true
    })
    expect(wrapper.find('.modal-backdrop').exists()).toBe(false)
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('.modal-bottom').exists()).toBe(false)
    expect(wrapper.find('.font-bold.text-lg').exists()).toBe(false)
    wrapper.vm.$emit('update:modelValue', false)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
  })
  it('renders title, default and action slots', () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true
      },
      slots: {
        title: '<div>Slot title</div>',
        default: '<div>Slot default</div>',
        action: '<div>Slot action</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot default')
    expect(wrapper.text()).toContain('Slot action')
  })
})

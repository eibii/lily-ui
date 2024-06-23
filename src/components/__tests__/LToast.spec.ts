import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Toast from '../LToast.vue'

describe('Toast', () => {
  it('renders a toast with default props', () => {
    const wrapper = mount(Toast, {
      props: {
        message: 'Text message'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      message: 'Text message',
      title: '',
      iconClass: undefined,
      severity: 'default',
      position: 'default'
    })
  })

  it('renders a toast with custom props', () => {
    const wrapper = mount(Toast, {
      props: {
        title: 'Text title',
        message: 'Text message',
        iconClass: 'bi bi-exclamation-triangle-fill',
        severity: 'warning',
        position: 'top-center'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.text()).toContain('Text title')
    expect(wrapper.text()).toContain('Text message')
    expect(wrapper.find('.bi.bi-exclamation-triangle-fill').exists()).toBe(true)
    expect(wrapper.find('.alert-warning').exists()).toBe(true)
    expect(wrapper.find('.toast-top.toast-center').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      title: 'Text title',
      message: 'Text message',
      iconClass: 'bi bi-exclamation-triangle-fill',
      severity: 'warning',
      position: 'top-center'
    })
  })

  it('renders a toast with default slot', () => {
    const wrapper = mount(Toast, {
      props: {
        message: 'Text message'
      },
      slots: {
        default: '<div>Slot default</div>'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot default')
  })
})

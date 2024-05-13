import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Toast from '../LToast.vue'

describe('Toast', () => {
  it('renders a toast with default props', () => {
    const wrapper = mount(Toast, {
      props: {
        label: 'Text label'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: 'Text label',
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
        label: 'Text label',
        iconClass: 'bi bi-exclamation-triangle-fill',
        severity: 'warning',
        position: 'top-center'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.text()).toContain('Text title')
    expect(wrapper.text()).toContain('Text label')
    expect(wrapper.find('.bi.bi-exclamation-triangle-fill').exists()).toBe(true)
    expect(wrapper.find('.alert-warning').exists()).toBe(true)
    expect(wrapper.find('.toast-top.toast-center').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      title: 'Text title',
      label: 'Text label',
      iconClass: 'bi bi-exclamation-triangle-fill',
      severity: 'warning',
      position: 'top-center'
    })
  })

  it('renders a toast with default slot', () => {
    const wrapper = mount(Toast, {
      props: {
        label: 'Text label'
      },
      slots: {
        default: '<div>Slot default</div>'
      }
    })

    expect(wrapper.find('.toast').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot default')
  })
})

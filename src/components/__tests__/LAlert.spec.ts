import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Alert from '../LAlert.vue'

describe('Alert', () => {
  it('renders a alert with default props', () => {
    const wrapper = mount(Alert)

    expect(wrapper.find('.alert').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      title: '',
      label: '',
      iconClass: '',
      severity: 'default'
    })
  })

  it('renders a alert with custom props', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Text title',
        label: 'Text label',
        iconClass: 'bi bi-exclamation-triangle-fill',
        severity: 'warning'
      }
    })

    expect(wrapper.find('.alert').exists()).toBe(true)
    expect(wrapper.text()).toContain('Text title')
    expect(wrapper.text()).toContain('Text label')
    expect(wrapper.find('.bi.bi-exclamation-triangle-fill').exists()).toBe(true)
    expect(wrapper.find('.alert-warning').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      title: 'Text title',
      label: 'Text label',
      iconClass: 'bi bi-exclamation-triangle-fill',
      severity: 'warning'
    })
  })

  it('renders a alert with default slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })

    expect(wrapper.find('.alert').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot default')
  })
})

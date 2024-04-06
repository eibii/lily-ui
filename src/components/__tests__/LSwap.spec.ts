import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Swap from '../LSwap.vue'

describe('Swap', () => {
  it('renders a button with default props', () => {
    const wrapper = mount(Swap)

    expect(wrapper.find('.swap').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: false,
      disabled: false,
      onIcon: '',
      offIcon: '',
      onText: 'ON',
      offText: 'OFF',
      btn: false,
      shape: 'default',
      effect: 'default',
      animate: 'default'
    })
  })
  it('renders a swap with custom props', () => {
    const wrapper = mount(Swap, {
      props: {
        modelValue: true,
        disabled: false,
        onIcon: 'bi bi-moon-fill',
        offIcon: 'bi bi-moon',
        onText: '',
        offText: '',
        btn: true,
        shape: 'circle',
        effect: 'link',
        animate: 'rotate'
      }
    })

    expect(wrapper.find('.swap').exists()).toBe(true)
    expect(wrapper.find('.bi.bi-moon-fill').exists()).toBe(true)
    expect(wrapper.find('.bi.bi-moon').exists()).toBe(true)
    expect(wrapper.find('.btn-circle').exists()).toBe(true)
    expect(wrapper.find('.btn-link').exists()).toBe(true)
    expect(wrapper.find('.swap-rotate').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: true,
      disabled: false,
      onIcon: 'bi bi-moon-fill',
      offIcon: 'bi bi-moon',
      onText: '',
      offText: '',
      btn: true,
      shape: 'circle',
      effect: 'link',
      animate: 'rotate'
    })
  })
  it('renders properly', () => {
    const wrapper = mount(Swap, { props: { modelValue: true, onText: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('is disabled', () => {
    const wrapper = mount(Swap, { props: { modelValue: true, disabled: true } })
    expect(wrapper.get('label').attributes('disabled')).toBe('true')
  })
})

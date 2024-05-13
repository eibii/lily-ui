import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import ThemeMode from '../LThemeMode.vue'

describe('ThemeMode', () => {
  it('renders a theme-mode with default props', () => {
    const wrapper = mount(ThemeMode, {
      props: {
        modelValue: false
      }
    })

    expect(wrapper.find('.swap').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: false,
      widthClass: 'w-10',
      heightClass: 'h-10',
      defaultMode: 'dark',
      disabled: false,
      animate: 'rotate'
    })
  })
  it('renders a theme-mode with custom props', () => {
    const wrapper = mount(ThemeMode, {
      props: {
        modelValue: true,
        widthClass: 'w-8',
        heightClass: 'h-8',
        defaultMode: 'dark',
        disabled: false,
        animate: 'flip'
      }
    })

    expect(wrapper.find('.swap').exists()).toBe(true)
    expect(wrapper.find('.swap-flip').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: true,
      widthClass: 'w-8',
      heightClass: 'h-8',
      defaultMode: 'dark',
      disabled: false,
      animate: 'flip'
    })
  })
  it('is disabled', () => {
    const wrapper = mount(ThemeMode, { props: { modelValue: true, disabled: true } })
    expect(wrapper.get('label').attributes('disabled')).toBe('true')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import LMWindow from '../LMWindow.vue'

describe('LMWindow', () => {
  it('renders a mockWindow with default props', () => {
    const wrapper = mount(LMWindow)

    expect(wrapper.find('.mockup-window').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'border border-base-300',
      contentClass: 'flex justify-center px-4 py-16 border-t border-base-300'
    })
  })

  it('renders a mockWindow with custom props', () => {
    const wrapper = mount(LMWindow, {
      props: {
        bgClass: 'border bg-base-300',
        contentClass: 'flex justify-center px-4 py-16 bg-base-200'
      }
    })

    expect(wrapper.find('.mockup-window').exists()).toBe(true)
    expect(wrapper.find('.border.bg-base-300').exists()).toBe(true)
    expect(wrapper.find('.bg-base-200').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'border bg-base-300',
      contentClass: 'flex justify-center px-4 py-16 bg-base-200'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(LMWindow, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

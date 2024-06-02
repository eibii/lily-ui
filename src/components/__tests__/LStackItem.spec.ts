import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import StackItem from '../LStackItem.vue'

describe('StackItem', () => {
  it('renders a stackItem with default props', () => {
    const wrapper = mount(StackItem)

    expect(wrapper.props()).toEqual({
      src: undefined
    })
  })

  it('renders a stackItem with custom props', () => {
    const wrapper = mount(StackItem, {
      props: {
        src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(StackItem, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

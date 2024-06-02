import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Stack from '../LStack.vue'
import StackItem from '../LStackItem.vue'

describe('Stack', () => {
  it('renders a stack with default props', () => {
    const wrapper = mount(Stack)

    expect(wrapper.find('.stack').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      contentClass: '',
      styleContent: 'default'
    })
  })

  it('renders a stack with custom props', () => {
    const wrapper = mount(Stack, {
      global: {
        components: {
          StackItem
        }
      },
      props: {
        contentClass: '',
        styleContent: 'border'
      },
      slots: {
        default: '<stack-item>A</stack-item>'
      }
    })

    expect(wrapper.find('.stack').exists()).toBe(true)
    expect(wrapper.find('.border.border-base-content').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      contentClass: '',
      styleContent: 'border'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(Stack, {
      global: {
        components: {
          StackItem
        }
      },
      slots: {
        default: '<stack-item>Slot default</stack-item>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

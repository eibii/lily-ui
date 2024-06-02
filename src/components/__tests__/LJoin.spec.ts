import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Join from '../LJoin.vue'
import JoinItem from '../LJoinItem.vue'

describe('Join', () => {
  it('renders a join with default props', () => {
    const wrapper = mount(Join)

    expect(wrapper.find('.join').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      vertical: false
    })
  })

  it('renders a join with custom props', () => {
    const wrapper = mount(Join, {
      props: {
        vertical: true
      }
    })

    expect(wrapper.find('.join').exists()).toBe(true)
    expect(wrapper.find('.join-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      vertical: true
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(Join, {
      global: {
        components: {
          JoinItem
        }
      },
      slots: {
        default: '<join-item>Slot default</join-item>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

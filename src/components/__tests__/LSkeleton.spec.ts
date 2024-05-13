import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Skeleton from '../LSkeleton.vue'

describe('Skeleton', () => {
  it('renders a skeleton with default props', () => {
    const wrapper = mount(Skeleton)

    expect(wrapper.find('.skeleton').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      circle: false
    })
  })

  it('renders a skeleton with custom props', () => {
    const wrapper = mount(Skeleton, {
      props: {
        circle: true
      }
    })

    expect(wrapper.find('.skeleton').exists()).toBe(true)
    expect(wrapper.find('.rounded-full').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      circle: true
    })
  })
})

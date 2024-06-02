import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import ImgShape from '../LImgShape.vue'

describe('ImgShape', () => {
  it('renders a imgShape with default props', () => {
    const wrapper = mount(ImgShape)

    expect(wrapper.find('.mask').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      shape: 'default'
    })
  })

  it('renders a imgShape with custom props', () => {
    const wrapper = mount(ImgShape, {
      props: {
        shape: 'circle'
      }
    })

    expect(wrapper.find('.mask').exists()).toBe(true)
    expect(wrapper.find('.mask-circle').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      shape: 'circle'
    })
  })
})

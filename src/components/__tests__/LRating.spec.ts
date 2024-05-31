import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Rating from '../LRating.vue'

describe('Rating', () => {
  it('renders a rating with default props', () => {
    const wrapper = mount(Rating)

    expect(wrapper.find('.rating').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-orange-400',
      modelValue: 0,
      name: 'rating',
      stars: 5,
      icon: 'default',
      disabled: false,
      half: false,
      size: 'default'
    })
  })

  it('renders a rating with custom props', () => {
    const wrapper = mount(Rating, {
      props: {
        bgClass: 'bg-red-400',
        modelValue: 3,
        name: 'rating',
        stars: 3,
        icon: 'heart',
        disabled: false,
        half: false,
        size: 'lg'
      }
    })

    expect(wrapper.find('.rating').exists()).toBe(true)
    expect(wrapper.find('.bg-red-400').exists()).toBe(true)
    expect(wrapper.find('.mask-star').exists()).toBe(false)
    expect(wrapper.find('.mask-heart').exists()).toBe(true)
    expect(wrapper.find('.rating-lg').exists()).toBe(true)
    expect(wrapper.findAll('.mask').length).toBe(3)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-red-400',
      modelValue: 3,
      name: 'rating',
      stars: 3,
      icon: 'heart',
      disabled: false,
      half: false,
      size: 'lg'
    })
  })
})

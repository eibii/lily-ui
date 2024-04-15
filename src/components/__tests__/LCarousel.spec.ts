import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Carousel from '../LCarousel.vue'

describe('Carousel', () => {
  const items = [
    {
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=60',
      alt: 'City'
    },
    {
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=60',
      alt: 'City'
    }
  ]

  it('renders a carousel with default props', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.find('.carousel').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items: [],
      align: 'default',
      vertical: false,
      itemClass: '',
      fullBleed: false,
      indicator: false,
      slide: false
    })
  })
  it('renders a carousel with custom props', () => {
    const wrapper = mount(Carousel, {
      props: {
        items,
        align: 'center',
        vertical: true,
        itemClass: 'bg-gray-200',
        fullBleed: false,
        indicator: true,
        slide: false
      }
    })

    expect(wrapper.find('.carousel').exists()).toBe(true)
    expect(wrapper.find('.bg-gray-200').exists()).toBe(true)
    expect(wrapper.find('.corousel-indicator').exists()).toBe(true)
    expect(wrapper.find('.carousel-center').exists()).toBe(false)
    expect(wrapper.find('.carousel-vertical').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      items,
      align: 'center',
      vertical: true,
      itemClass: 'bg-gray-200',
      fullBleed: false,
      indicator: true,
      slide: false
    })
  })
  it('render an carousel with indicator', () => {
    const wrapper = mount(Carousel, {
      props: {
        items,
        indicator: true
      }
    })

    expect(wrapper.find('.carousel').exists()).toBe(true)
    expect(wrapper.find('.corousel-indicator').exists()).toBe(true)
    expect(wrapper.find('.carousel-center').exists()).toBe(false)
    expect(wrapper.find('.carousel-vertical').exists()).toBe(false)
    expect(wrapper.find('svg').exists()).toBe(false)
  })
  it('render an carousel with slide', () => {
    const wrapper = mount(Carousel, {
      props: {
        items,
        slide: true
      }
    })

    expect(wrapper.find('.carousel').exists()).toBe(true)
    expect(wrapper.find('.corousel-indicator').exists()).toBe(false)
    expect(wrapper.find('.carousel-center').exists()).toBe(false)
    expect(wrapper.find('.carousel-vertical').exists()).toBe(false)
    expect(wrapper.find('svg').exists()).toBe(true)
  })
  it('emit onItemActive event', async () => {
    const wrapper = mount(Carousel, { items, slide: true })

    wrapper.vm.$emit('onItemActive', 2)
    expect(wrapper.emitted('onItemActive')).toBeTruthy()
    expect(wrapper.emitted('onItemActive')).toEqual([[2]])
  })
})

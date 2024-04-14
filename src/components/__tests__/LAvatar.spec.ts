import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Avatar from '../LAvatar.vue'

describe('Avatar', () => {
  it('renders a avatar with default props', () => {
    const wrapper = mount(Avatar)

    expect(wrapper.find('.avatar').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-neutral',
      image: '',
      text: '',
      textClass: 'text-xl text-neutral-content',
      iconClass: 'text-2xl bi bi-person',
      widthClass: 'w-16',
      shape: 'circle',
      mask: 'default',
      ring: false,
      online: false,
      offline: false
    })
  })
  it('renders a avatar with custom props', () => {
    const wrapper = mount(Avatar, {
      props: {
        bgClass: 'bg-orange-500',
        image: '',
        text: '',
        textClass: 'text-lg text-red-500',
        iconClass: 'text-xl bi bi-moon',
        widthClass: 'w-20',
        shape: 'circle',
        mask: 'squircle',
        ring: true,
        online: true,
        offline: false
      }
    })

    expect(wrapper.find('.avatar').exists()).toBe(true)
    expect(wrapper.find('.ring.ring-primary.ring-offset-base-100.ring-offset-2').exists()).toBe(
      true
    )
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.mask.mask-squircle').exists()).toBe(true)
    expect(wrapper.find('.w-20').exists()).toBe(true)
    expect(wrapper.find('.text-xl.bi.bi-moon').exists()).toBe(true)
    expect(wrapper.find('.text-lg.text-red-500').exists()).toBe(true)
    expect(wrapper.find('.bg-orange-500').exists()).toBe(true)
    expect(wrapper.find('.online').exists()).toBe(true)
    expect(wrapper.find('.offline').exists()).toBe(false)
    expect(wrapper.find('.rounded-full').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-orange-500',
      image: '',
      text: '',
      textClass: 'text-lg text-red-500',
      iconClass: 'text-xl bi bi-moon',
      widthClass: 'w-20',
      shape: 'circle',
      mask: 'squircle',
      ring: true,
      online: true,
      offline: false
    })
  })
  it('render an avatar with image', () => {
    const wrapper = mount(Avatar, {
      props: {
        image: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=60'
      }
    })

    expect(wrapper.find('.avatar').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
  })
  it('render an avatar with text', () => {
    const wrapper = mount(Avatar, {
      props: {
        text: 'lily'
      }
    })

    expect(wrapper.find('.avatar').exists()).toBe(true)
    expect(wrapper.text()).toContain('lily')
  })
  it('render an avatar with icon', () => {
    const wrapper = mount(Avatar, {
      props: {
        iconClass: 'bi bi-check'
      }
    })

    expect(wrapper.find('.avatar').exists()).toBe(true)
    expect(wrapper.find('i').exists()).toBe(true)
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Hero from '../LHero.vue'

describe('Hero', () => {
  it('renders a hero with default props', () => {
    const wrapper = mount(Hero)

    expect(wrapper.find('.hero').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-200',
      heigthClass: 'min-h-screen',
      center: false,
      overlay: false,
      contentClass: ''
    })
  })

  it('renders a hero with custom props', () => {
    const wrapper = mount(Hero, {
      props: {
        bgClass: 'bg-base-200',
        heigthClass: 'min-h-screen',
        center: true,
        overlay: true,
        contentClass: 'text-neutral-content'
      }
    })

    expect(wrapper.find('.hero').exists()).toBe(true)
    expect(wrapper.find('.bg-base-200').exists()).toBe(true)
    expect(wrapper.find('.text-center').exists()).toBe(true)
    expect(wrapper.find('.hero-overlay.bg-opacity-60').exists()).toBe(true)
    expect(wrapper.find('.text-neutral-content').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-200',
      heigthClass: 'min-h-screen',
      center: true,
      overlay: true,
      contentClass: 'text-neutral-content'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(Hero, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

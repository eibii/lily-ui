import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Card from '../LCard.vue'

describe('Card', () => {
  it('renders a card with default props', () => {
    const wrapper = mount(Card)

    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      cardClass: 'bg-base-100 shadow-xl',
      image: '',
      imageAlt: '',
      compact: false,
      bImage: false,
      hImage: false,
      center: false,
      imageFull: false,
      effect: 'default',
      severity: 'default',
      closable: false
    })
  })
  it('renders a card with custom props', () => {
    const wrapper = mount(Card, {
      props: {
        cardClass: 'bg-orange-500 shadow-2xl',
        image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=60',
        imageAlt: 'neon',
        compact: true,
        bImage: false,
        hImage: false,
        center: true,
        imageFull: false,
        effect: 'ghost',
        severity: 'neutral',
        closable: true
      }
    })

    expect(wrapper.find('.card').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toBe('neon')
    expect(wrapper.find('.card-compact').exists()).toBe(true)
    expect(wrapper.find('.items-center.text-center').exists()).toBe(true)
    expect(wrapper.find('.bg-neutral.text-neutral-content').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      cardClass: 'bg-orange-500 shadow-2xl',
      image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=60',
      imageAlt: 'neon',
      compact: true,
      bImage: false,
      hImage: false,
      center: true,
      imageFull: false,
      effect: 'ghost',
      severity: 'neutral',
      closable: true
    })
  })
  it('emit onClose event', async () => {
    const wrapper = mount(Card, { closeable: true })
    wrapper.vm.$emit('onClose', true)
    expect(wrapper.emitted('onClose')).toBeTruthy()
    expect(wrapper.emitted('onClose')).toEqual([[true]])
  })
  it('render default slot', () => {
    const wrapper = mount(Card, {
      slots: {
        title: 'Slot title',
        default: 'Slot default'
      }
    })

    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot default')
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Link from '../LLink.vue'

describe('Link', () => {
  it('renders a link with default props', () => {
    const wrapper = mount(Link)

    expect(wrapper.find('.link').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: '',
      serverity: 'default',
      underline: false
    })
  })
  it('renders a link with custom props', () => {
    const wrapper = mount(Link, {
      props: {
        label: '',
        serverity: 'secondary',
        underline: true
      }
    })

    expect(wrapper.find('.link').exists()).toBe(true)
    expect(wrapper.find('.link-secondary').exists()).toBe(true)
    expect(wrapper.find('.link-hover').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      label: '',
      serverity: 'secondary',
      underline: true
    })
  })
  it('renders a link with a slot', () => {
    const wrapper = mount(Link, {
      slots: {
        default: 'Link text'
      }
    })

    expect(wrapper.text()).toBe('Link text')
  })
  it('renders a link with a label', () => {
    const wrapper = mount(Link, {
      props: {
        label: 'Label text'
      }
    })

    expect(wrapper.text()).toBe('Label text')
  })
  it('emits a click event when clicked', async () => {
    const wrapper = mount(Link)

    await wrapper.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })
})

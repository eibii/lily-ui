import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Timeline from '../LTimeline.vue'

describe('Timeline', () => {
  const items = [
    {
      label: 'Title 1',
      desc: 'Content 1'
    },
    {
      label: 'Title 2',
      desc: 'Content 2'
    }
  ]

  it('renders a timeline with default props', () => {
    const wrapper = mount(Timeline, {
      props: {
        items
      }
    })

    expect(wrapper.find('.timeline').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      iconClass: 'bi bi-check-circle-fill',
      startLine: false,
      endLine: false,
      noIcon: false,
      vertical: false
    })
  })
  it('renders a timeline with custom props', () => {
    const wrapper = mount(Timeline, {
      props: {
        items,
        iconClass: 'bi bi-check-circle-fill',
        startLine: true,
        endLine: true,
        noIcon: false,
        vertical: false
      }
    })

    expect(wrapper.find('.timeline').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      iconClass: 'bi bi-check-circle-fill',
      startLine: true,
      endLine: true,
      noIcon: false,
      vertical: false
    })
  })
  it('renders a timeline with startLine and endLine', () => {
    const wrapper = mount(Timeline, {
      props: {
        items,
        startLine: true,
        endLine: true
      }
    })

    const elTimeline = wrapper.find('.timeline')
    expect(elTimeline.exists()).toBe(true)
    const firstItem = elTimeline.find('li:first-child')
    expect(firstItem.find('[data-start-line]').exists()).toBe(true)
    const lastItem = elTimeline.find('li:last-child')
    expect(lastItem.find('[data-end-line]').exists()).toBe(true)
  })
  it('renders a timeline without icon', () => {
    const wrapper = mount(Timeline, {
      props: {
        items,
        noIcon: true
      }
    })

    const elTimeline = wrapper.find('.timeline')
    expect(elTimeline.exists()).toBe(true)
    const firstItem = elTimeline.find('li:first-child')
    expect(firstItem.find('.timeline-middle').exists()).toBe(false)
  })
  it('renders a timeline vertically', () => {
    const wrapper = mount(Timeline, {
      props: {
        items,
        vertical: true
      }
    })

    expect(wrapper.find('.timeline').exists()).toBe(true)
    expect(wrapper.find('.timeline-vertical').exists()).toBe(true)
  })
})

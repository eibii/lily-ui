import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import TimelineText from '../LTimelineText.vue'

describe('TimelineText', () => {
  const items = [
    {
      iconClass: 'bi bi-chat-dots',
      label: '1984',
      title: 'First Macintosh computer',
      desc: 'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.'
    },
    {
      label: '1998',
      title: 'iMac',
      desc: "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms"
    },
    {
      label: '2001',
      title: 'iPod',
      desc: 'The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple'
    }
  ]

  it('renders a timeline-text with default props', () => {
    const wrapper = mount(TimelineText, {
      props: {
        items
      }
    })

    expect(wrapper.find('.timeline.timeline-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      iconClass: 'bi bi-check-circle-fill',
      startLine: false,
      endLine: false,
      noIcon: false
    })
  })
  it('renders a timeline-text with custom props', () => {
    const wrapper = mount(TimelineText, {
      props: {
        items,
        iconClass: 'bi bi-check-circle',
        startLine: true,
        endLine: true,
        noIcon: false
      }
    })

    expect(wrapper.find('.timeline.timeline-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      iconClass: 'bi bi-check-circle',
      startLine: true,
      endLine: true,
      noIcon: false
    })
  })
  it('renders a timeline-text with startLine and endLine', () => {
    const wrapper = mount(TimelineText, {
      props: {
        items,
        startLine: true,
        endLine: true
      }
    })

    const elTimeline = wrapper.find('.timeline.timeline-vertical')
    expect(elTimeline.exists()).toBe(true)
    const firstItem = elTimeline.find('li:first-child')
    expect(firstItem.find('[data-start-line]').exists()).toBe(true)
    const lastItem = elTimeline.find('li:last-child')
    expect(lastItem.find('[data-end-line]').exists()).toBe(true)
  })
  it('renders a timeline-text without icon', () => {
    const wrapper = mount(TimelineText, {
      props: {
        items,
        noIcon: true
      }
    })

    const elTimeline = wrapper.find('.timeline.timeline-vertical')
    expect(elTimeline.exists()).toBe(true)
    const firstItem = elTimeline.find('li:first-child')
    expect(firstItem.find('.timeline-middle').exists()).toBe(false)
  })
})

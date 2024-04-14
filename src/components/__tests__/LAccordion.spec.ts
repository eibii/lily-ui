import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Accordion from '../LAccordion.vue'

describe('Accordion', () => {
  it('renders a accordion with default props', () => {
    const wrapper = mount(Accordion)

    expect(wrapper.find('.accordion-item.collapse').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      name: 'my-accordion-1',
      active: false,
      unstyledTitle: false,
      collapseIcon: 'arrow'
    })
  })
  it('renders a accordion with custom props', () => {
    const wrapper = mount(Accordion, {
      props: {
        name: 'my-accordion',
        active: true,
        unstyledTitle: true,
        collapseIcon: 'plus'
      }
    })

    expect(wrapper.find('.accordion-item.collapse').exists()).toBe(true)
    expect(wrapper.find('.text-xl.font-medium').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      name: 'my-accordion',
      active: true,
      unstyledTitle: true,
      collapseIcon: 'plus'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(Accordion, {
      slots: {
        title: '<div class="accordion-item">Slot title</div>',
        default: '<div class="accordion-item">Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot default')
  })
})

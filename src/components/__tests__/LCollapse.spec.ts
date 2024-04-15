import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Collapse from '../LCollapse.vue'

describe('Collapse', () => {
  it('renders a collapse with default props', () => {
    const wrapper = mount(Collapse)

    expect(wrapper.find('.collapse').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-200',
      focus: false,
      active: false,
      unstyledTitle: false,
      collapseIcon: 'arrow'
    })
  })
  it('renders a collapse with custom props', () => {
    const wrapper = mount(Collapse, {
      props: {
        bgClass: 'bg-black',
        focus: true,
        active: true,
        unstyledTitle: true,
        collapseIcon: 'plus'
      }
    })

    expect(wrapper.find('.collapse').exists()).toBe(true)
    expect(wrapper.find('.text-xl.font-medium').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-black',
      focus: true,
      active: true,
      unstyledTitle: true,
      collapseIcon: 'plus'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(Collapse, {
      slots: {
        title: '<div class="accordion-item">Slot title</div>',
        default: '<div class="accordion-item">Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot default')
  })
})

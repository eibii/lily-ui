import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import * as _ from 'lodash-es'

import AccordionGroup from '../LAccordionGroup.vue'

describe('AccordionGroup', () => {
  it('renders a accordion-group with default props', () => {
    const wrapper = mount(AccordionGroup)

    expect(wrapper.find('.join.join-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      borderClass: 'border-base-300'
    })
  })
  it('renders a accordion-group with custom props', () => {
    const wrapper = mount(AccordionGroup, {
      props: {
        borderClass: 'border-red-300'
      }
    })

    expect(wrapper.find('.join.join-vertical').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      borderClass: 'border-red-300'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(AccordionGroup, {
      slots: {
        default: '<div class="accordion-item">Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
    _.delay(() => {
      expect(wrapper.find('.join-item').exists()).toBe(true)
    }, 50)
  })
})

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Stat from '../LStat.vue'

describe('Stat', () => {
  it('renders a stat with default props', () => {
    const wrapper = mount(Stat)

    expect(wrapper.find('.stat').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      shadow: true
    })
  })
  it('renders a stat with custom props', () => {
    const wrapper = mount(Stat, {
      props: {
        shadow: false
      }
    })

    expect(wrapper.find('.stat').exists()).toBe(true)
    expect(wrapper.find('.shadow').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      shadow: false
    })
  })
  it('renders figure, title, value, desc and actions slots', () => {
    const wrapper = mount(Stat, {
      slots: {
        figure: '<div>Slot figure</div>',
        title: '<div>Slot title</div>',
        value: '<div>Slot value</div>',
        actions: '<div>Slot actions</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot figure')
    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot value')
    expect(wrapper.text()).toContain('Slot actions')
  })
})

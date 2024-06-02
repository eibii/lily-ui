import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Tabs from '../LTabs.vue'
import LTab from '../LTab.vue'

describe('Tabs', () => {
  it('renders a tabs with default props', () => {
    const wrapper = mount(Tabs)

    expect(wrapper.find('.tabs').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: 0,
      size: 'default',
      type: 'default'
    })
  })

  it('renders a tabs with custom props', () => {
    const wrapper = mount(Tabs, {
      props: {
        modelValue: 1,
        size: 'lg',
        type: 'lifted'
      },
      slots: {
        default: '<div>Slot default</div>'
      }
    })

    expect(wrapper.find('.tabs').exists()).toBe(true)
    expect(wrapper.find('.tabs-lg').exists()).toBe(true)
    expect(wrapper.find('.tabs-lifted').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      modelValue: 1,
      size: 'lg',
      type: 'lifted'
    })
  })

  it('renders a tabs items', () => {
    const wrapper = mount(Tabs, {
      global: {
        components: {
          LTab
        }
      },
      slots: {
        default: '<l-tab header="Tab 1">Tab 1 content</l-tab>'
      }
    })

    expect(wrapper.find('.tabs').exists()).toBe(true)
    const tab = wrapper.findComponent(LTab)
    expect(tab.text()).toContain('Tab 1 content')
  })
})

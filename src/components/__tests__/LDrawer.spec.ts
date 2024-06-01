import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Drawer from '../LDrawer.vue'

describe('Drawer', () => {
  it('renders a drawer with default props', () => {
    const wrapper = mount(Drawer)

    expect(wrapper.find('.drawer').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      right: false
    })
  })

  it('renders a drawer with custom props', () => {
    const wrapper = mount(Drawer, {
      props: {
        right: true
      }
    })

    expect(wrapper.find('.drawer').exists()).toBe(true)
    expect(wrapper.find('.drawer-end').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      right: true
    })
  })

  it('renders drawerContent and drawerSide slots', () => {
    const wrapper = mount(Drawer, {
      slots: {
        drawerContent: '<div>Slot drawerContent</div>',
        drawerSide: '<div>Slot drawerSide</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot drawerContent')
    expect(wrapper.text()).toContain('Slot drawerSide')
  })
})

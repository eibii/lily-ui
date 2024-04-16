import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Diff from '../LDiff.vue'

describe('Diff', () => {
  it('renders a diff with default props', () => {
    const wrapper = mount(Diff)

    expect(wrapper.find('.diff').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      aspect: 'default'
    })
  })
  it('renders a diff with custom props', () => {
    const wrapper = mount(Diff, {
      props: {
        aspect: '16/9'
      }
    })

    expect(wrapper.find('.diff').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      aspect: '16/9'
    })
  })
  it('renders item-1 and item-2 slots', () => {
    const wrapper = mount(Diff, {
      slots: {
        'item-1': '<div>Slot item 1</div>',
        'item-2': '<div>Slot item 2</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot item 1')
    expect(wrapper.text()).toContain('Slot item 2')
  })
})

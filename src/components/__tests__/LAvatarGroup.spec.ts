import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import AvatarGroup from '../LAvatarGroup.vue'

describe('AvatarGroup', () => {
  it('renders a avatar-group with default props', () => {
    const wrapper = mount(AvatarGroup)

    expect(wrapper.find('.avatar-group').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      counter: '',
      counterClass: 'bg-neutral text-neutral-content'
    })
  })
  it('renders a avatar-group with custom props', () => {
    const wrapper = mount(AvatarGroup, {
      props: {
        counter: '+99',
        counterClass: 'bg-neutral text-red-500'
      }
    })

    expect(wrapper.find('.avatar-group').exists()).toBe(true)
    expect(wrapper.text()).toContain('+99')
    expect(wrapper.props()).toEqual({
      counter: '+99',
      counterClass: 'bg-neutral text-red-500'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(AvatarGroup, {
      slots: {
        default: '<div class="avatar">Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
    expect(wrapper.find('.avatar').exists()).toBe(true)
  })
})

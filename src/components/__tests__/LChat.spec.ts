import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Chat from '../LChat.vue'

describe('Chat', () => {
  it('renders a chat with default props', () => {
    const wrapper = mount(Chat)

    expect(wrapper.find('.chat').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      align: 'default',
      headerTime: '',
      severity: 'default'
    })
  })
  it('renders a chat with custom props', () => {
    const wrapper = mount(Chat, {
      props: {
        align: 'end',
        headerTime: '12:45',
        severity: 'primary'
      },
      slots: {
        header: 'Chat header'
      }
    })

    expect(wrapper.find('.chat').exists()).toBe(true)
    expect(wrapper.text()).toContain('12:45')
    expect(wrapper.props()).toEqual({
      align: 'end',
      headerTime: '12:45',
      severity: 'primary'
    })
  })
  it('render default slot', () => {
    const wrapper = mount(Chat, {
      slots: {
        header: 'Slot header',
        default: 'Slot default',
        footer: 'Slot footer'
      }
    })

    expect(wrapper.text()).toContain('Slot header')
    expect(wrapper.text()).toContain('Slot default')
    expect(wrapper.text()).toContain('Slot footer')
  })
})

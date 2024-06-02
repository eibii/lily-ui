import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import LMBrowser from '../LMBrowser.vue'

describe('LMBrowser', () => {
  it('renders a mockBrowser with default props', () => {
    const wrapper = mount(LMBrowser)

    expect(wrapper.find('.mockup-browser').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      domain: 'https://lilyui.com',
      contentClass: 'flex justify-center px-4 py-16'
    })
  })

  it('renders a mockBrowser with custom props', () => {
    const wrapper = mount(LMBrowser, {
      props: {
        domain: 'https://lilyui.com',
        contentClass: 'flex justify-center px-4 py-16'
      }
    })

    expect(wrapper.find('.mockup-browser').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      domain: 'https://lilyui.com',
      contentClass: 'flex justify-center px-4 py-16'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(LMBrowser, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

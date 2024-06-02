import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import JoinItem from '../LJoinItem.vue'

describe('JoinItem', () => {
  it('renders default slot', () => {
    const wrapper = mount(JoinItem, {
      slots: {
        default: '<div class="teste">Slot default</div>'
      }
    })

    expect(wrapper.find('.join-item').exists()).toBe(true)
    expect(wrapper.text()).toContain('Slot default')
  })
})

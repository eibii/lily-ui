import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Dropdown from '../LDropdownHelper.vue'

describe('DropdownHelper', () => {
  it('renders a dropdown-helper with default props', () => {
    const wrapper = mount(Dropdown)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      widthClass: 'w-64',
      size: 'default',
      open: false,
      hover: false,
      position: 'default',
      shape: 'default',
      align: 'default',
      iconColor: 'text-info',
      cardClass: '',
      cardBgClass: 'bg-base-100',
      cardColor: ''
    })
  })
  it('renders a dropdown-helper with custom props', () => {
    const wrapper = mount(Dropdown, {
      props: {
        widthClass: 'w-48',
        size: 'lg',
        open: true,
        hover: false,
        position: 'dropdown-top',
        shape: 'square',
        align: 'dropdown-right',
        iconColor: 'text-info',
        cardClass: 'border-2 border-gray-200',
        cardBgClass: 'bg-gray-200',
        cardColor: 'text-gray-800'
      }
    })

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      widthClass: 'w-48',
      size: 'lg',
      open: true,
      hover: false,
      position: 'dropdown-top',
      shape: 'square',
      align: 'dropdown-right',
      iconColor: 'text-info',
      cardClass: 'border-2 border-gray-200',
      cardBgClass: 'bg-gray-200',
      cardColor: 'text-gray-800'
    })
  })
  it('renders title and default slots', () => {
    const wrapper = mount(Dropdown, {
      slots: {
        title: '<div>Slot title</div>',
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot title')
    expect(wrapper.text()).toContain('Slot default')
  })
})

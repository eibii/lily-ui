import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Dropdown from '../LDropdownCard.vue'

describe('DropdownCard', () => {
  it('renders a dropdown-card with default props', () => {
    const wrapper = mount(Dropdown)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      widthClass: 'w-52',
      label: '',
      icon: '',
      iconRight: '',
      disabled: false,
      open: false,
      hover: false,
      position: 'default',
      align: 'default',
      cardClass: '',
      cardBgClass: 'bg-primary',
      cardColor: 'text-primary-content'
    })
  })
  it('renders a dropdown-card with custom props', () => {
    const wrapper = mount(Dropdown, {
      props: {
        widthClass: 'w-48',
        label: 'Dropdown',
        icon: 'fa fa-check',
        iconRight: '',
        disabled: true,
        open: true,
        hover: false,
        position: 'dropdown-top',
        align: 'dropdown-right',
        cardClass: 'border-2 border-gray-200',
        cardBgClass: 'bg-gray-200',
        cardColor: 'text-gray-800'
      }
    })

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      widthClass: 'w-48',
      label: 'Dropdown',
      icon: 'fa fa-check',
      iconRight: '',
      disabled: true,
      open: true,
      hover: false,
      position: 'dropdown-top',
      align: 'dropdown-right',
      cardClass: 'border-2 border-gray-200',
      cardBgClass: 'bg-gray-200',
      cardColor: 'text-gray-800'
    })
  })
  it('renders properly', () => {
    const wrapper = mount(Dropdown, { props: { label: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
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
  it('is disabled', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        disabled: true,
        width: 'w-48',
        label: 'Dropdown',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' }
        ]
      }
    })
    await wrapper.trigger('click')
    const elUl = wrapper.find('.card-body')
    expect(elUl.exists()).toBe(false)
  })
})

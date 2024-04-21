import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Menu from '../LMenu.vue'

describe('Menu', () => {
  const items = [
    {
      label: 'Item 1'
    },
    {
      label: 'Item 2'
    },
    {
      label: 'Item 3'
    }
  ]

  it('renders a menu with default props', () => {
    const wrapper = mount(Menu, {
      props: {
        items
      }
    })

    expect(wrapper.find('.menu').exists()).toBe(true)
    expect(wrapper.find('.bg-base-200').exists()).toBe(true)
    expect(wrapper.find('.menu-horizontal').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      items,
      menuClass: 'bg-base-200',
      horizontal: false,
      size: 'default',
      shape: 'default'
    })
  })
  it('renders a menu with custom props', () => {
    const wrapper = mount(Menu, {
      props: {
        items,
        menuClass: 'bg-primary',
        horizontal: true,
        size: 'lg',
        shape: 'square'
      }
    })

    expect(wrapper.find('.menu').exists()).toBe(true)
    expect(wrapper.find('.bg-primary').exists()).toBe(true)
    expect(wrapper.find('.menu-horizontal').exists()).toBe(true)
    expect(wrapper.find('.menu-lg').exists()).toBe(true)
    expect(wrapper.find('.menu').attributes('class')).toContain('[&_li>*]:rounded-none')
    expect(wrapper.props()).toEqual({
      items,
      menuClass: 'bg-primary',
      horizontal: true,
      size: 'lg',
      shape: 'square'
    })
  })
  it('renders 3 items', () => {
    const wrapper = mount(Menu, {
      props: {
        items
      }
    })

    expect(wrapper.findAll('li').length).toBe(3)
  })
  it('renders a tooltip', () => {
    const wrapper = mount(Menu, {
      props: {
        items: [
          ...items,
          {
            label: 'Item 4',
            tooltip: 'This is a tooltip'
          }
        ]
      }
    })

    expect(wrapper.find('.tooltip').exists()).toBe(true)
  })
  it('emits an event when clicking on the first item', async () => {
    const wrapper = mount(Menu, {
      props: {
        items
      }
    })
    const firstItem = wrapper.find('li:first-child').find('a')
    await firstItem.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted().onClick[0]).toEqual([items[0]])
  })
  it('does not emit an event when clicking on a disabled item', async () => {
    const wrapper = mount(Menu, {
      props: {
        items: [
          ...items,
          {
            label: 'Item 4',
            disabled: true
          }
        ]
      }
    })
    const disabledItem = wrapper.find('li:last-child').find('a')
    await disabledItem.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('onClick')
  })
  it('renders a badge', () => {
    const wrapper = mount(Menu, {
      props: {
        items: [
          ...items,
          {
            label: 'Item 4',
            badge: '10'
          }
        ]
      }
    })

    expect(wrapper.find('.badge').exists()).toBe(true)
  })
  it('renders a title slot', () => {
    const wrapper = mount(Menu, {
      slots: {
        title: '<span>Menu Title</span>'
      }
    })

    expect(wrapper.text()).toContain('Menu Title')
  })
  it('renders a titleParent slot', () => {
    const wrapper = mount(Menu, {
      slots: {
        title: '<span>Menu Title Parent</span>'
      }
    })

    expect(wrapper.text()).toContain('Menu Title Parent')
  })
  it('renders an active item', () => {
    const wrapper = mount(Menu, {
      props: {
        items: [
          ...items,
          {
            label: 'Item 4',
            active: true
          }
        ]
      }
    })

    expect(wrapper.find('.active').exists()).toBe(true)
  })
})

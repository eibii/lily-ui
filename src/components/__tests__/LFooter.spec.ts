import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Footer from '../LFooter.vue'

describe('Footer', () => {
  const menus = [
    {
      label: 'About us'
    },
    {
      label: 'Contact'
    },
    {
      label: 'Jobs'
    },
    {
      label: 'Press kit'
    }
  ]
  const collectionMenu = [
    {
      menus: menus
    }
  ]

  it('renders a footer with default props', () => {
    const wrapper = mount(Footer)

    expect(wrapper.find('.footer').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-base-300 text-base-content',
      center: false,
      logo: undefined,
      copyright: '',
      socialMenuTitle: undefined,
      socialMenu: [],
      collectionMenu: [],
      menuCol: false,
      newsletter: undefined
    })
  })

  it('renders a footer with custom props', () => {
    const wrapper = mount(Footer, {
      props: {
        bgClass: 'bg-neutral text-neutral-content',
        center: true,
        logo: undefined,
        copyright: 'Copyright © 2024 - All right reserved ',
        socialMenuTitle: undefined,
        socialMenu: [],
        collectionMenu,
        menuCol: false,
        newsletter: undefined
      }
    })

    expect(wrapper.find('.footer').exists()).toBe(true)
    expect(wrapper.find('.footer-center').exists()).toBe(true)
    expect(wrapper.find('.bg-neutral.text-neutral-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('Copyright © 2024 - All right reserved ')
    expect(wrapper.props()).toEqual({
      bgClass: 'bg-neutral text-neutral-content',
      center: true,
      logo: undefined,
      copyright: 'Copyright © 2024 - All right reserved ',
      socialMenuTitle: undefined,
      socialMenu: [],
      collectionMenu,
      menuCol: false,
      newsletter: undefined
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(Footer, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot default')
  })
})

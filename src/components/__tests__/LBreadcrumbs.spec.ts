import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Breadcrumbs from '../LBreadcrumbs.vue'

describe('Breadcrumbs', () => {
  const items = [
    {
      label: 'Home'
    },
    {
      label: 'Documents'
    },
    {
      label: 'Add Document',
      iconClass: 'bi bi-folder-check'
    }
  ]

  it('renders a breadcrumbs with default props', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items
      }
    })

    expect(wrapper.find('.breadcrumbs').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      items,
      textSize: 'default',
      iconClass: '',
      lastItemClick: false
    })
  })
  it('renders a breadcrumbs with custom props', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items,

        textSize: 'lg',
        iconClass: 'bi bi-folder',
        lastItemClick: false
      }
    })

    const elBreadcrumbs = wrapper.find('.breadcrumbs')
    expect(elBreadcrumbs.exists()).toBe(true)
    expect(wrapper.find('.text-lg').exists()).toBe(true)
    const lastItem = elBreadcrumbs.find('li:last-child')
    expect(lastItem.find('a').exists()).toBe(false)
    expect(wrapper.props()).toEqual({
      items,
      textSize: 'lg',
      iconClass: 'bi bi-folder',
      lastItemClick: false
    })
  })
  it('renders a breadcrumbs without icon', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        items,
        textSize: 'lg',
        iconClass: 'bi bi-folder',
        lastItemClick: false
      }
    })

    expect(wrapper.find('.breadcrumbs').exists()).toBe(true)
    expect(wrapper.find('.bi.bi-folder').exists()).toBe(true)
  })
})

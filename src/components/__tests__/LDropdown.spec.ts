import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Dropdown from '../LDropdown.vue'

describe('Dropdown', () => {
  it('renders a dropdown with default props', () => {
    const wrapper = mount(Dropdown)

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      disabled: false,
      widthClass: 'w-52',
      label: '',
      options: [],
      optionsClass: 'bg-base-200',
      optionClass: '',
      icon: '',
      iconRight: '',
      loading: false,
      open: false,
      hover: false,
      position: 'default',
      align: 'default',
      size: 'default',
      shape: 'default',
      effect: 'default',
      severity: 'default'
    })
  })
  it('renders a dropdown with custom props', () => {
    const wrapper = mount(Dropdown, {
      props: {
        disabled: true,
        widthClass: 'w-48',
        label: 'Dropdown',
        options: [],
        optionsClass: 'bg-base-200',
        optionClass: '',
        icon: 'fa fa-check',
        iconRight: '',
        loading: true,
        open: true,
        hover: false,
        position: 'dropdown-top',
        align: 'dropdown-right',
        size: 'default',
        shape: 'default',
        effect: 'default',
        severity: 'default'
      }
    })

    expect(wrapper.find('.dropdown').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      disabled: true,
      widthClass: 'w-48',
      label: 'Dropdown',
      options: [],
      optionsClass: 'bg-base-200',
      optionClass: '',
      icon: 'fa fa-check',
      iconRight: '',
      loading: true,
      open: true,
      hover: false,
      position: 'dropdown-top',
      align: 'dropdown-right',
      size: 'default',
      shape: 'default',
      effect: 'default',
      severity: 'default'
    })
  })
  it('renders properly', () => {
    const wrapper = mount(Dropdown, { props: { label: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('emits click in option', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        widthClass: 'w-48',
        label: 'Dropdown',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' }
        ]
      }
    })
    await wrapper.trigger('click')
    const elUl = wrapper.find('ul')
    const el = elUl.findAll('li').at(2)?.find('a')
    el?.trigger('click')
    expect(wrapper.emitted().onClickOption).toBeTruthy()
    expect(wrapper.emitted().onClickOption.length).toBe(1)
    expect(wrapper.emitted().onClickOption[0]).toEqual([{ label: 'Option 3', value: '3' }])
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
    const elUl = wrapper.find('ul')
    expect(elUl.exists()).toBe(false)
  })
  it('is disabled in option', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        width: 'w-48',
        label: 'Dropdown',
        options: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', disabled: true, value: '3' }
        ]
      }
    })
    await wrapper.trigger('click')
    const elUl = wrapper.find('ul')
    const el = elUl.findAll('li').at(2)?.find('a')
    el?.trigger('click')
    expect(wrapper.emitted().onClickOption).toBe(undefined)
  })
})

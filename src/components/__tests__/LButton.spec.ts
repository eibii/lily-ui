import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Button from '../LButton.vue'

describe('Button', () => {
  it('renders a button with default props', () => {
    const wrapper = mount(Button)

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      type: 'button',
      size: 'default',
      label: '',
      icon: '',
      iconRight: '',
      block: false,
      wide: false,
      outline: false,
      active: false,
      disabled: false,
      loading: false,
      noAnimation: false,
      loadingText: '',
      shape: 'default',
      effect: 'default',
      severity: 'default'
    })
  })
  it('renders a button with custom props', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'submit',
        size: 'lg',
        label: 'Submit',
        icon: 'fa fa-check',
        block: true,
        outline: true,
        active: true,
        disabled: true,
        loading: true,
        noAnimation: true,
        loadingText: 'Loading...',
        shape: 'circle',
        effect: 'glass',
        severity: 'primary'
      }
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      type: 'submit',
      size: 'lg',
      label: 'Submit',
      icon: 'fa fa-check',
      iconRight: '',
      block: true,
      wide: false,
      outline: true,
      active: true,
      disabled: true,
      loading: true,
      noAnimation: true,
      loadingText: 'Loading...',
      shape: 'circle',
      effect: 'glass',
      severity: 'primary'
    })
  })
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { label: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  it('renders a button with custom props', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'submit',
        size: 'lg',
        label: 'Submit',
        icon: 'fa fa-check',
        block: true,
        outline: true,
        active: true,
        disabled: true,
        loading: true,
        noAnimation: true,
        loadingText: 'Loading...',
        shape: 'circle',
        effect: 'glass',
        severity: 'primary'
      }
    })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      type: 'submit',
      size: 'lg',
      label: 'Submit',
      icon: 'fa fa-check',
      iconRight: '',
      block: true,
      wide: false,
      outline: true,
      active: true,
      disabled: true,
      loading: true,
      noAnimation: true,
      loadingText: 'Loading...',
      shape: 'circle',
      effect: 'glass',
      severity: 'primary'
    })
  })
  it('emits click event', async () => {
    const wrapper = mount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  it('is disabled', () => {
    const wrapper = mount(Button, { props: { disabled: true } })
    expect(wrapper.get('button').attributes('disabled')).toBe('')
  })
  it('is loading', () => {
    const wrapper = mount(Button, { props: { loading: true, loadingText: 'wait...' } })
    expect(wrapper.find('[data-loading]').get('span').classes()).includes('loading-spinner')
    expect(wrapper.text()).toContain('wait...')
  })
  it('render default slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<div>Slot default</div>'
      }
    })

    expect(wrapper.text()).toContain('Slot default')
  })
})

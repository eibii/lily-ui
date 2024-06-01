import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Indicator from '../LIndicator.vue'

describe('Indicator', () => {
  it('renders a indicator with default props', () => {
    const wrapper = mount(Indicator)

    expect(wrapper.find('.indicator').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      textBadge: '',
      noBadge: false,
      size: 'default',
      effect: 'default',
      severity: 'default',
      outline: false,
      position: 'default'
    })
  })

  it('renders a indicator with custom props', () => {
    const wrapper = mount(Indicator, {
      props: {
        textBadge: 'new',
        noBadge: false,
        size: 'lg',
        effect: 'default',
        severity: 'success',
        outline: false,
        position: 'default'
      }
    })

    expect(wrapper.find('.indicator').exists()).toBe(true)
    expect(wrapper.find('.badge-lg').exists()).toBe(true)
    expect(wrapper.find('.badge-success').exists()).toBe(true)
    expect(wrapper.text()).toContain('new')
    expect(wrapper.props()).toEqual({
      textBadge: 'new',
      noBadge: false,
      size: 'lg',
      effect: 'default',
      severity: 'success',
      outline: false,
      position: 'default'
    })
  })

  it('renders default slot', () => {
    const wrapper = mount(Indicator, {
      slots: {
        indicatorItemTopLeft: '<div>Slot indicatorItemTopLeft</div>',
        indicatorItemTopCenter: '<div>Slot indicatorItemTopCenter</div>',
        indicatorItemTopRight: '<div>Slot indicatorItemTopRight</div>',
        indicatorItemMiddleLeft: '<div>Slot indicatorItemMiddleLeft</div>',
        indicatorItemMiddleCenter: '<div>Slot indicatorItemMiddleCenter</div>',
        indicatorItemMiddleRight: '<div>Slot indicatorItemMiddleRight</div>',
        indicatorItemBottomLeft: '<div>Slot indicatorItemBottomLeft</div>',
        indicatorItemBottomCenter: '<div>Slot indicatorItemBottomCenter</div>',
        indicatorItemBottomRight: '<div>Slot indicatorItemBottomRight</div>',
        default: '<div>Slot default</div>'
      }
    })
    expect(wrapper.text()).toContain('Slot indicatorItemTopLeft')
    expect(wrapper.text()).toContain('Slot indicatorItemTopCenter')
    expect(wrapper.text()).toContain('Slot indicatorItemTopRight')
    expect(wrapper.text()).toContain('Slot indicatorItemMiddleLeft')
    expect(wrapper.text()).toContain('Slot indicatorItemMiddleCenter')
    expect(wrapper.text()).toContain('Slot indicatorItemMiddleRight')
    expect(wrapper.text()).toContain('Slot indicatorItemBottomLeft')
    expect(wrapper.text()).toContain('Slot indicatorItemBottomCenter')
    expect(wrapper.text()).toContain('Slot indicatorItemBottomRight')
    expect(wrapper.text()).toContain('Slot default')
  })
})

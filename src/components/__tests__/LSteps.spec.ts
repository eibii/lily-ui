import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import Steps from '../LSteps.vue'

describe('Steps', () => {
  const steps = [
    {
      label: 'resume.pdf',
      iconClass: 'text-xl bi bi-filetype-pdf',
      active: true
    },
    {
      label: 'profile.jpg',
      iconClass: 'text-xl bi bi-file-image',

      active: true
    },
    {
      label: 'cover-letter.docx',
      iconClass: 'text-xl bi bi-file-word'
    }
  ]

  it('renders a steps with default props', () => {
    const wrapper = mount(Steps, {
      props: {
        steps
      }
    })

    expect(wrapper.find('.steps').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      steps,
      vertical: false,
      severity: undefined
    })
  })

  it('renders a steps with custom props', () => {
    const wrapper = mount(Steps, {
      props: {
        steps,
        vertical: true,
        severity: 'info'
      }
    })

    expect(wrapper.find('.steps').exists()).toBe(true)
    expect(wrapper.find('.steps-vertical').exists()).toBe(true)
    expect(wrapper.find('.step-info').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      steps,
      vertical: true,
      severity: 'info'
    })
  })

  it('renders a steps items', () => {
    const wrapper = mount(Steps, {
      props: {
        steps
      }
    })

    expect(wrapper.text()).toContain('resume.pdf')
    expect(wrapper.text()).toContain('profile.jpg')
    expect(wrapper.text()).toContain('cover-letter.docx')
  })
})

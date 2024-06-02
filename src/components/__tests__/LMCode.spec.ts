import type { Command } from '../../@types/Props'

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import LMCode from '../LMCode.vue'

describe('LMCode', () => {
  const commands: Command[] = [
    {
      code: 'npm i lilyyui',
      prefix: '$'
    },
    {
      code: 'installing...',
      prefix: '>',
      severity: 'warning'
    },
    {
      code: 'Done!',
      prefix: '>',
      severity: 'success'
    }
  ]

  it('renders a mockCode with default props', () => {
    const wrapper = mount(LMCode, {
      props: {
        commands
      }
    })

    expect(wrapper.find('.mockup-code').exists()).toBe(true)
    expect(wrapper.props()).toEqual({
      commands
    })
  })
})

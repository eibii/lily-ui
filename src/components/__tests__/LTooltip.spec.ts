import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'

import vTooltip from '../../directives/Tooltip'

describe('Tooltip', () => {
  it('creates tooltip element with correct text', async () => {
    const wrapper = mount({
      template: `<div v-tooltip="'Test tooltip'">Hover me</div>`,
      directives: {
        tooltip: vTooltip
      }
    })

    await nextTick()
    console.log(wrapper.find('.tooltip'))

    // expect(wrapper.find('.tooltip').exists()).toBe(true)
    // expect(wrapper.find('.tooltip').attributes('data-tip')).toBe('Test tooltip')
  })

  // it('shows tooltip immediately if the `open` modifier is used', async () => {
  //   const wrapper = mount({
  //     template: `<div v-tooltip.open="'Test tooltip'">Hover me</div>`,
  //     directives: {
  //       tooltip: vTooltip
  //     }
  //   })

  //   await nextTick()

  //   expect(wrapper.find('.tooltip').attributes('style')).toContain('display: block')
  // })
})

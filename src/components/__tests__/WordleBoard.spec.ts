/**
 * 4. You can remove "expect" once you add globals: true on vitest.config.js
 */
import { describe, it} from 'vitest'
// import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'

describe('WordleBoard', () => {
  it('renders properly', () => {
    const wrapper = mount(WordleBoard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toMatch('Hello Vitest');
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

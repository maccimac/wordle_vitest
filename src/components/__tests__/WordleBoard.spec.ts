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


/**
 * 4. Naming
 * - Don't use "correct" or "incorrect"
 * - Should be understanble for non-dev
 */
describe('WordleBoard', ()=> {
  test("Victory message appears when the user makes a guess that matches word of the day", async () => {
    // Arrange
    const wrapper = mount
    (WordleBoard, {
      props: {
        wordOfTheDay: "TESTS"
      }
    })

    // Act
    const guessInput = wrapper.find("input[type=text]");
    await guessInput.setValue("TESTS")
    await guessInput.trigger("keydown.enter")

    // Assertion
    expect(wrapper.text()).toContain("You won!")
  })
})


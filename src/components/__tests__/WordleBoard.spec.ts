/**
 * 4. You can remove "expect" once you add globals: true on vitest.config.js
 */
import { describe, it, beforeEach} from 'vitest'
// import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from "../../settings.ts"


describe('WordleBoard', () => {
  it('renders properly', () => {
    const wrapper : VueComponent = mount(WordleBoard, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toMatch('Hello Vitest');
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

/**
 * 4. Naming
 * - Don't use "correct" or "incorrect"
 * - Should be understanble for non-dev
 */
describe('WordleBoard', () : void => {
  /**
   * 5. Arrange phase is moved here
   */
  // Arrange
  let wordOfTheDay : string = "TESTS"
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() : void=>{
      wrapper = mount
      (WordleBoard, {
        props: {
          wordOfTheDay
        }
      })
  })

  /**
   * 5. Helper methods
   */
  async function playerSubmitsGuess(guess: string){
    const guessInput : DOMWrapper<ELEMENT>= wrapper.find("input[type=text]");
    await guessInput.setValue(guess)
    await guessInput.trigger("keydown.enter")
  }

  test("Victory message appears when the user makes a guess that matches word of the day", async () => {
    /**
     * Arrange phase is moved to beforeEach
     */
    // Arrange

    /**
     * Use helperMethod playerSubmitsGuest for Act phase
     */
    // Act
    await playerSubmitsGuess(wordOfTheDay)

    // Assertion
    // expect(wrapper.text()).toContain("You won!") // <- Magic string
    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
  /**
   * 5.
   * - You can use test.todo until you're ready
   */
  // test.todo("a defeat message if the user makes a guess that is incorrect");

  test("A defeat message if the user makes a guess that is incorrect",
    async () : void => {
      await playerSubmitsGuess("wrong value")

      // Assertion
      expect(wrapper.text()).toContain(DEFEAT_MESSAGE);
    })

  // test.todo("no end of game message")
  it.todo("no end of game message") // `it.todo` <- This also works

  test("No end of game message if no guess yet", (): void => {
    // Act
    // no action

    // Assertion
    /**
     * 5. Use of `.not`
     */
    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })
})


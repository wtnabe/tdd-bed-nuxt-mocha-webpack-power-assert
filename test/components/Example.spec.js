import { mount } from '@vue/test-utils'
import Example from '~/components/Example.vue'

describe('Example component', () => {
  var wrapper

  beforeEach(() => {
    wrapper = mount(Example)
  })

  describe('rendered html', () => {
    it('template tag and computed value', () => {
      assert.equal('<p>1 : 1</p>', wrapper.html())
    })
  })

  describe('rendered text', () => {
    it('inner text only', () => {
      assert.equal('1 : 1', wrapper.text())
    })
  })

  describe('direct computed value', () => {
    it('plain value', () => {
      assert.equal(1, wrapper.vm.val)
    })
  })
})

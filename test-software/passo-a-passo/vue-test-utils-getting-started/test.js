// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './counter'
import Vue from 'vue'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  // simulating user interaction
  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  /*
  async function
  We can await Vue.nextTick() by writing the tests in an async function:
  */
  it('button click should increment the count text', async () => {
    wrapper.vm.$data.count = 0
    expect(wrapper.text()).toContain('0')
    const button = wrapper.find('button')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('1')
  })

  // it('actual Vue instance vm', () => {
  //   // You can access the actual Vue instance via `wrapper.vm`
  //   const vm = wrapper.vm

  //   // To inspect the wrapper deeper just log it to the console
  //   // and your adventure with the Vue Test Utils begins
  //   console.log(wrapper)
  // })
})

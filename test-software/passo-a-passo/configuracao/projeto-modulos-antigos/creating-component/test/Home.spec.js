import { mount, shallowMount } from '@vue/test-utils'

import Home from '@/Home.vue' // tem um alias configurado no webpack.config.js apontando do "@" para a pasta "src"
// import Home from '../src/Home.vue' // caso não tenho alias configurado

describe('Home.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Home)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<p>Server Status: Critical</p>')
  })

  // it('matches snapshot', () => {
  //   const items = ['item 1', 'item 2']
  //   const wrapper = shallowMount(List, {
  //     propsData: { items }
  //   })
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})

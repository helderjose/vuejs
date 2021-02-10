import { shallowMount } from '@vue/test-utils';
import MessageComponent from '@/components/MessageComponent.vue';

describe('MessageComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(MessageComponent, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

/*
Retirado do stackoverflow.

In my opinion, you should always shallow mount your components
when doing unit tests, and simply mount them when doing
tests in your entire application.
*/



// mesmo exemplo usando mount no lugar do shallowMount
// import { mount } from '@vue/test-utils';
// import MessageComponent from '@/components/MessageComponent.vue';

// describe('MessageComponent.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message';

//     // mount() returns a wrapped Vue component we can interact with
//     const wrapper = mount(MessageComponent, {
//       propsData: { msg },
//     });

//     // Assert the rendered text of the component
//     expect(wrapper.text()).toContain(msg);
//   });
// });

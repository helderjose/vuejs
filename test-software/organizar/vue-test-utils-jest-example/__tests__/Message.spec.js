import { mount } from "@vue/test-utils";
import AppHeader from "@/components/Message";

describe('AppHeader', () => {
  test("test 1", () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find("button").isVisible()).toBe(true);
  });

  // test("if a user is logged in, show the logout button", () => {
  //   const wrapper = mount(AppHeader);
  //   wrapper.setData({ loggedIn: true });
  //   expect(wrapper.find("button").isVisible()).toBe(true);
  // });
})
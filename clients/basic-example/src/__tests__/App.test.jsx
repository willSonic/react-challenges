import React from "react";
import { shallow, mount} from "enzyme";
import App from '../App.jsx';


describe("<App />", () => {
  test('it should exist', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toExist();
  });
});

import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import SignUp from './signup';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<SignUp/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

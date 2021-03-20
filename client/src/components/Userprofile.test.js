import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import UserProfile from './Userprofile';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<UserProfile/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

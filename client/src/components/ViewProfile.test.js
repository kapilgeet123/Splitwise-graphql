import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import ViewProfile from './Viewprofile';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<ViewProfile/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

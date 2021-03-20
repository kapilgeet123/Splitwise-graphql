import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AddGroups from './Groups';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<AddGroups />);
  expect(component).toMatchSnapshot();
  component.unmount();
});

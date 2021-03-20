import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Result from './Result';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<Result/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

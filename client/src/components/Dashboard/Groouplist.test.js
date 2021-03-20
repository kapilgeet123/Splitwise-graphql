import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Grouplist from './Grouplist';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
  const component = mount(<Grouplist/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

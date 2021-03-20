import React from 'react';
import { mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import SettleUp from './settleUp';

configure({ adapter: new Adapter() });

it('should render correctly', () => {
    let values =["mia","jia","tia"];
  const component = mount(<SettleUp eve={values}/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});

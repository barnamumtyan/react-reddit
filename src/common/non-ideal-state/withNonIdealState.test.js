import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinner from './Spinner';
import FailedMessage from './FailedMessage';

import withNonIdealState from './withNonIdealState';

const SomeComponent = () => <div>SomeComponent</div>;

const WrappedComponent = withNonIdealState(SomeComponent);

describe('withNonIdealState', () => {

  describe('when loading', () => {
    const shallowComponent = shallow(<WrappedComponent isLoading />);
    it('doesn\'t show SomeComponent', () => {
      expect(shallowComponent.find('SomeComponent').exists()).toBe(false);
    });
    it('shows the Spinner', () => {
      expect(shallowComponent.name()).toBe(Spinner.displayName);
    });
  })

  describe('when failure occours', () => {
    const shallowComponent = shallow(<WrappedComponent didFail />);
    it('doesn\'t show SomeComponent', () => {
      expect(shallowComponent.find('SomeComponent').exists()).toBe(false);
    });
    it('shows the FailedMessage', () => {
      expect(shallowComponent.name()).toBe(FailedMessage.displayName);
    });
  });

  describe('when everything\'s fine', () => {
    it('shows the  component', () => {
      const shallowComponent = shallow(<WrappedComponent />);
      expect(shallowComponent.text()).toBe('SomeComponent');
    });
  });
});
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

it('it should match the home page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

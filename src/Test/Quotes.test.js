import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../pages/Quotes';

it('it should match the quotes page', () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Calculatrice from '../pages/Calculatrice';

it('it should match the calculator page', () => {
  const tree = renderer.create(<Calculatrice />).toJSON();
  expect(tree).toMatchSnapshot();
});

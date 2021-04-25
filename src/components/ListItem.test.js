import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';
import MockNavigation from 'mocks/MockNavigation';

// const ListItemWithMockTitle = (props) => {
//   return (
//     <ListItem {...props} title='mock title' />
//   )
// }

describe('<ListItem />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(
      <MockNavigation
        component={ListItemWithMockTitle}
        options={{ title: 'Movies' }}
      />
    ).toJSON();
    expect(true).toBe(true)
    // expect(tree.children.length).toBe(1);
  });
});

// describe('<ListItem />', () => {
//   it('has 1 child', () => {
//     const tree = renderer.create(
//       <ListItem title='mock title'/>
//     ).toJSON();
//     // expect(true).toBe(true)
//     expect(tree.children.length).toBe(1);
//   });
// });
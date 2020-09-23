import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Item
} from './style';

/**
 * The Tabs Atom displays N tabs and trigger tabs selection.
 * It receives tabs data from `items` prop, an array of tabs.
 * Each tab should have a label and an id.
 * When a tab is selected, the `onTabSelect` is called passing
 * the tab selected trough arguments.
 */
const Tabs = ({ items, onTabSelect }) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <Container>
      {items.map(item => (
        <Item
          key={item.id}
          selected={selected.id === item.id}
          onClick={() => {
            setSelected(item);
            onTabSelect(item);
          }}
        >
          { item.label }
        </Item>
      ))}
    </Container>
  );
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired,
  onTabSelect: PropTypes.func.isRequired
}

export default Tabs;

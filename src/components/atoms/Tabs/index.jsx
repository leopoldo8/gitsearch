import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Item
} from './style';

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

import React from 'react';

const List = ({ data, renderItem: RenderItem, keyExtractor = item => item.id }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={keyExtractor(item)}>
          <RenderItem data={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;

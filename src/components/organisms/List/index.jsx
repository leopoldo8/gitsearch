import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { ListElement, Item, LoaderContainer } from './style';

const List = ({ data, renderItem: RenderItem, keyExtractor, bottomOffset, onLoadMore, loading }) => {
  const listRef = useRef();

  useEffect(() => {
    const isBottom = (el) => el.getBoundingClientRect().bottom <= (window.innerHeight + bottomOffset);

    const trackScrolling = () => {
      const wrappedElement = listRef.current;
      if (isBottom(wrappedElement)) {
        onLoadMore();
      }
    };

    document.addEventListener('scroll', trackScrolling);

    return () => {
      document.removeEventListener('scroll', trackScrolling);
    }
  }, [bottomOffset, onLoadMore]);

  return (
    <ListElement ref={listRef}>
      {data.map((item, i) => (
        <Item key={keyExtractor(item)} isLastItem={i === (data.length - 1)}>
          <RenderItem data={item} />
        </Item>
      ))}
      {loading ? (
        <LoaderContainer>
          <Loader size="large" theme="dark" />
        </LoaderContainer>
      ) : null}
    </ListElement>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func,
  bottomOffset: PropTypes.number,
  onLoadMore: PropTypes.func,
  loading: PropTypes.bool
};

List.defaultProps = {
  keyExtractor: item => item.id,
  bottomOffset: 150,
  onLoadMore: () => null,
  loading: false
};

export default List;

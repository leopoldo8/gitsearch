import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { debounce } from '@modules/utils';

import { ListElement, Item, LoaderContainer, EndListText } from './style';

const List = ({ data, renderItem: RenderItem, keyExtractor, bottomOffset, onLoadMore, loading, endReached }) => {
  const listRef = useRef();

  useEffect(() => {
    const isBottom = (el) => el.getBoundingClientRect().bottom <= (window.innerHeight + bottomOffset);

    const trackScrolling = debounce(() => {
      const wrappedElement = listRef.current;
      if (isBottom(wrappedElement)) {
        onLoadMore();
      }
    }, 100);

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
      {endReached && !loading ? (
        <EndListText>
          Fim da lista
        </EndListText>
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
  loading: PropTypes.bool,
  endReached: PropTypes.bool
};

List.defaultProps = {
  keyExtractor: item => item.id,
  bottomOffset: 150,
  onLoadMore: () => null,
  loading: false,
  endReached: false
};

export default List;

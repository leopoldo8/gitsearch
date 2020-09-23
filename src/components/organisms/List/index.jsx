import React, { useRef, useEffect } from 'react';
import { MobileView, BrowserView, isBrowser } from 'react-device-detect';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { debounce } from '@modules/utils';

import { ListElement, Item, LoaderContainer, EndListText } from './style';

const List = ({
  data,
  renderItem: RenderItem,
  keyExtractor,
  bottomOffset,
  onLoadMore,
  loading,
  endReached,
  verticalDesktop,
  noResultsText
}) => {
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

  useEffect(() => {
    const wideScreen = isBrowser || document.body.clientHeight > 900;
    const loadMoreNeverHappened = data && data.length < 20;
    if (wideScreen && loadMoreNeverHappened && !verticalDesktop) {
      onLoadMore();
    }
  }, [data, onLoadMore, verticalDesktop]);

  const noResultsFunc = () => !data.length && endReached && !loading ? (
    <EndListText>
      { noResultsText }
    </EndListText>
  ) : null;

  const endListFunc = () => data.length && endReached && !loading ? (
    <EndListText>
      Fim da lista
    </EndListText>
  ) : null;

  const loaderFunc = () => loading ? (
    <LoaderContainer>
      <Loader size="large" theme="dark" />
    </LoaderContainer>
  ) : null;

  const ListAux = () => (
    <>
      {noResultsFunc()}
      {loaderFunc()}
      {endListFunc()}
    </>
  )

  return (
    <>
      <ListElement verticalDesktop={verticalDesktop} ref={listRef}>
        {data.map((item, i) => (
          <Item
            key={keyExtractor(item)}
            isLastItem={i === (data.length - 1)}
            verticalDesktop={verticalDesktop}
          >
            <RenderItem data={item} />
          </Item>
        ))}
        <MobileView>
          <ListAux />
        </MobileView>
      </ListElement>
      <BrowserView>
        <ListAux />
      </BrowserView>
    </>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func,
  bottomOffset: PropTypes.number,
  onLoadMore: PropTypes.func,
  loading: PropTypes.bool,
  endReached: PropTypes.bool,
  verticalDesktop: PropTypes.bool,
  noResultsText: PropTypes.string
};

List.defaultProps = {
  keyExtractor: item => item.id,
  bottomOffset: 150,
  onLoadMore: () => null,
  loading: false,
  endReached: false,
  verticalDesktop: false,
  noResultsText: 'Não encontramos resultados para essa busca.'
};

export default List;

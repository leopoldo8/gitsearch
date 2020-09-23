import React, { useRef, useEffect } from 'react';
import { MobileView, BrowserView, isBrowser } from 'react-device-detect';
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';

import { debounce } from '@modules/utils';

import { ListElement, Item, LoaderContainer, EndListText } from './style';

/**
 * The List Organism dynamically displays a list with a custom item rendering.
 * It has two mandatory props: data and renderItem.
 *
 * The data prop is the data which list will loop into. An array of any.
 * The renderItem is the item displayed for each item inside data.
 * The keyExtractor is a function that will extract a property from each item to
 * be used as a key for the loop. The default property is `item.id`.
 * The bottomOffset is the offset between bottom which will trigger LoadMore function.
 * The onLoadMore is a function that is called when list bottom reached.
 * The loading prop is a boolean to whether display a loader or not at
 * the end of the list.
 * The endReached prop is a boolean to tell the list that it remains no data,
 * in other words, the list reached it last page.
 * The verticalDesktop is a boolean to display the list as a vertical
 * list even in desktop.
 * The emptyText is a string that will display when the list is empty.
 */
const List = ({
  data,
  renderItem: RenderItem,
  keyExtractor,
  bottomOffset,
  onLoadMore,
  loading,
  endReached,
  verticalDesktop,
  emptyText
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
      { emptyText }
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
  emptyText: PropTypes.string
};

List.defaultProps = {
  keyExtractor: item => item.id,
  bottomOffset: 150,
  onLoadMore: () => null,
  loading: false,
  endReached: false,
  verticalDesktop: false,
  emptyText: 'Não encontramos resultados para essa busca.'
};

export default List;

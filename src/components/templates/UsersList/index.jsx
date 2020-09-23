import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

import userItem from '@components/atoms/UserItem';
import Topbar from '@components/atoms/TopBar';
import List from '@components/organisms/List';
import Search from '@components/organisms/Search';

import PaginationHelper from '@modules/paginationHelper';

import { Container, SearchContainer } from './style';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UsersListTemplate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const history = useHistory();
  let searchQuery = query.get("q");

  const pagination = useCallback(new PaginationHelper({
    success: data => {
      setLoading(false);
      setData(data);
    },
    error: error => toast.error(error),
    itemsExtractor: res => searchQuery ? res.data.items : res.data
  }), [searchQuery]);

  const loadMore = () => {
    if (pagination.hasNextPage) {
      setLoading(true);
      pagination.loadNextPage();
    }
  }

  useEffect(() => {
    function fetchData() {
      let api = '/users';

      if (searchQuery) {
        const formattedQuery = searchQuery.replace(/ /g, '+');
        api = `/search/users?q=${formattedQuery}`;
      }

      pagination.load(api);
    }

    fetchData();
  }, [searchQuery, pagination]);
  return (
    <>
      <Topbar title="Lista de Usuários" onGoBack={() => history.push('/')} />
      <Container>
        <SearchContainer>
          <Search origin="users-list" initialValue={searchQuery} />
        </SearchContainer>
        <List
          data={data}
          loading={loading}
          renderItem={userItem}
          onLoadMore={loadMore}
          endReached={!pagination.hasNextPage}
        />
      </Container>
    </>
  );
}

export default UsersListTemplate;

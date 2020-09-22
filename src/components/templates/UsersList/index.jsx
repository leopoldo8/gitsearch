import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

import userItem from '@components/atoms/UserItem';
import List from '@components/organisms/List';
import Search from '@components/organisms/Search';

import PaginationHelper from '@modules/paginationHelper';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UsersListTemplate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useQuery();
  const searchQuery = query.get("q");

  const pagination = useCallback(new PaginationHelper({
    success: data => {
      setLoading(false);
      setData(data);
    },
    error: error => toast.error(error),
    itemsExtractor: res => searchQuery ? res.data.items : res.data
  }), [searchQuery]);

  const loadMore = () => {
    setLoading(true);
    pagination.loadNextPage();
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
      <Search origin="users-list" />
      <List
        data={data}
        loading={loading}
        renderItem={userItem}
        onLoadMore={loadMore}
      />
    </>
  );
}

export default UsersListTemplate;

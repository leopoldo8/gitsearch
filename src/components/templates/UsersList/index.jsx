import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

// import userItem from '@components/atoms/UserItem';
import List from '@components/organisms/List';

import UsersAPI from '@api/services/users';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const UsersListTemplate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = useQuery();
  const searchQuery = query.get("q");

  useEffect(() => {
    const fetchDataAPI = () => {
      if (searchQuery) return UsersAPI.search(searchQuery);
      return UsersAPI.listUsers();
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchDataAPI();
        if (response.status === 200) {
          const data = searchQuery ? response.data.items : response.data;
          setData(data);
        }
      } catch (e) {
        toast.error('Alguma coisa deu errado. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <List
      data={data}
      loading={loading}
      renderItem={({ data }) => <p>{ data.login }</p>}
      onLoadMore={() => { console.log('load more') }}
    />
  );
}

export default UsersListTemplate;

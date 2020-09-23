import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import ProjectItem from '@components/atoms/ProjectItem';
import List from '@components/organisms/List';

import PaginationHelper from '@modules/paginationHelper';

import { Container } from './style';

const ProjectsTab = ({ repos_url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const pagination = useCallback(new PaginationHelper({
    success: data => {
      setLoading(false);
      setData(data);
    },
    error: error => toast.error(error),
    itemsExtractor: res => res.data,
    per_page: 8
  }), []);

  const loadMore = () => {
    if (pagination.hasNextPage) setLoading(true);
    pagination.loadNextPage();
  }

  useEffect(() => {
    pagination.load(repos_url);
  }, [pagination, repos_url]);

  return (
    <Container>
      <List
        data={data}
        loading={loading}
        renderItem={ProjectItem}
        onLoadMore={loadMore}
        endReached={!pagination.hasNextPage}
      />
    </Container>
  );
}

ProjectsTab.propTypes = {
  repos_url: PropTypes.string.isRequired
}

export default ProjectsTab;

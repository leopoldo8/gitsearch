import React from 'react';
import { Link } from "react-router-dom";

import {
  Container, Avatar, Name
} from './style';

const UserItem = ({ data }) => (
  <Link to={`/user/${data.login}`}>
    <Container>
      <Avatar src={data.avatar_url} />
      <Name>{ data.login }</Name>
    </Container>
  </Link>
);

export default UserItem;

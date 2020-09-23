import React from 'react';
import { Link } from "react-router-dom";

import {
  Container, Avatar, Name
} from './style';

/**
 * The User item displays each user list item.
 * It receives the item data from its props.
 */
const UserItem = ({ data }) => (
  <Link to={`/user/${data.login}`}>
    <Container>
      <Avatar src={data.avatar_url} />
      <Name>{ data.login }</Name>
    </Container>
  </Link>
);

export default UserItem;

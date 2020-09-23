import React from 'react';

import {
  Container,
  Subtitle,
  Text,
  ExtraInfo
} from './style';

/**
 * The AboutTab Atom displays the bio, location and the blog of the user.
 * It receives the user data from props.
 */
const AboutTab = ({ data }) => {
  const formatURL = url => {
    if (url.includes('http')) return url;
    return `http://${url}`;
  }

  return (
    <Container>
      <Subtitle>Bio</Subtitle>
      <Text>{ data.bio || "Esse usuário não possui uma bio." }</Text>
      {
        data.location
          ? <ExtraInfo><i className="icon-home" />{ data.location }</ExtraInfo>
          : null
      }
      {
        data.blog
          ? (
            <ExtraInfo>
              <i className="icon-notebook" />
              <a href={formatURL(data.blog)} target="_blank" rel="noopener noreferrer">
                { data.blog }
              </a>
            </ExtraInfo>
          ) : null
      }
    </Container>
  );
}

export default AboutTab;

import React from 'react';

import {
  Container, Name, Description, InfoContainer, Info, ContentContainer
} from './style';

/**
 * The Project item displays each project list item.
 * It receives the project data from its props.
 */
const ProjectItem = ({ data }) => {
  const formatDescription = description => {
    if (description.length > 100) return `${description.slice(0, 97)}...`;
    return description;
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={data.html_url}>
      <Container>
        <Name>{ data.name }</Name>
        <ContentContainer>
          <Description>{ data.description ? formatDescription(data.description) : "Esse projeto não possui descrição." }</Description>
          <InfoContainer>
            {data.language && <Info><i />{ data.language }</Info>}
            <Info>Atualizado em { new Date(data.updated_at).toLocaleDateString() }</Info>
          </InfoContainer>
        </ContentContainer>
      </Container>
    </a>
  );
}

export default ProjectItem;

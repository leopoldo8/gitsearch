import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Loader from '@components/atoms/Loader';
import Tabs from '@components/atoms/Tabs';
import AboutTab from '@components/atoms/AboutTab';
import Topbar from '@components/organisms/TopBar';
import ProjectsTab from '@components/organisms/ProjectsTab';

import UsersAPI from '@api/services/users';

import {
  Container,
  Banner,
  Avatar,
  Name,
  Login,
  SocialBox,
  SocialItem,
  SocialNumber,
  SocialLabel,
  TabsViewContainer,
  AvatarContainer,
  NameContainer,
  TopContainer,
  TabsContainer,
  TabsSelectorContainer
} from './style';

const BannerIMG = '/static/images/banner.png';

const UserTemplate = () => {
  const tabs = [
    {
      label: 'Sobre',
      id: 0
    },
    {
      label: 'Projetos',
      id: 1
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await UsersAPI.getUserByUsername(username);
      setData(response.data);
    }

    fetchData();
  }, [username]);

  const TabsView = () => {
    switch(activeTab.id) {
      case 1:
        return <ProjectsTab repos_url={data.repos_url} />

      default:
        return <AboutTab data={data} />
    }
  }

  const content = () => {

    if (data) {
      return (
        <Container>
          <Banner src={BannerIMG} />
          <TopContainer>
            <AvatarContainer>
              <Avatar src={data.avatar_url} />
              <NameContainer>
                <Name>{ data.name || data.login }</Name>
                <Login><i className="icon-user" />{ data.login }</Login>
              </NameContainer>
            </AvatarContainer>
            <SocialBox>
              <SocialItem>
                <SocialNumber><i className="icon-person" />{ data.following }</SocialNumber>
                <SocialLabel>Seguindo</SocialLabel>
              </SocialItem>
              <SocialItem>
                <SocialNumber><i className="icon-folder" />{ data.public_repos }</SocialNumber>
                <SocialLabel>Projetos</SocialLabel>
              </SocialItem>
              <SocialItem>
                <SocialNumber><i className="icon-users" />{ data.followers }</SocialNumber>
                <SocialLabel>Seguidores</SocialLabel>
              </SocialItem>
            </SocialBox>
          </TopContainer>
          <TabsContainer>
            <TabsSelectorContainer>
              <Tabs items={tabs} onTabSelect={tab => setActiveTab(tab)} />
            </TabsSelectorContainer>
            <TabsViewContainer>
              <TabsView />
            </TabsViewContainer>
          </TabsContainer>
        </Container>
      );
    }

    return (
      <Container full>
        <Loader size="large" theme="dark" />
      </Container>
    );
  }

  return (
    <>
      <Topbar title="Perfil" />
      {content()}
    </>
  )
}

export default UserTemplate;

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Loader from '@components/atoms/Loader';
import Tabs from '@components/atoms/Tabs';
import Topbar from '@components/atoms/TopBar';
import AboutTab from '@components/atoms/AboutTab';
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
      console.log(response.data);
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
          <Avatar src={data.avatar_url} />
          <Name>{ data.name }</Name>
          <Login><i className="icon-user" />{ data.login }</Login>
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
          <Tabs items={tabs} onTabSelect={tab => setActiveTab(tab)} />
          <TabsViewContainer>
            <TabsView />
          </TabsViewContainer>
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

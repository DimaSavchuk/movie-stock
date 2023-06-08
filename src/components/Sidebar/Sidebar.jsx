import React from 'react';

import { useGetCategoryQuery } from 'request/movie/apiMovieSlice';

import Loading from 'components/Loading/Loading';

import {
  SidebarStyled,
  Title,
  Navigation,
  Menu,
  NavLinks,
  SidebarFooter,
  Links,
} from './Sidebar.styled';

const Sidebar = () => {
  const { data, isLoading } = useGetCategoryQuery();

  const isLoadingData = () => {
    if (isLoading) {
      return <Loading />;
    }

    const { genres } = data;
    return (
      <SidebarStyled>
        <Title>CATEGORIES</Title>
        <Navigation>
          <Menu>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <NavLinks to={`/discover/movie?id=${id}`}>{name}</NavLinks>
              </li>
            ))}
          </Menu>
        </Navigation>

        <SidebarFooter>
          <Links href="/help" target="_blank">
            Help
          </Links>
          <Links
            href="/terms"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
            Terms & Conditions
          </Links>
        </SidebarFooter>
      </SidebarStyled>
    );
  };

  return isLoadingData();
};

export default Sidebar;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SidebarStyled = styled.section`
  width: 304px;
  padding: 24px;
  height: 423px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 600;
  line-height: 20px;
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  overflow: auto;
  height: 260px;
  scrollbar-width: thin;
  scrollbar-color: #000000 #ffffff;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 12px;
  }
`;

export const NavLinks = styled(NavLink)`
  color: var(--dark-sea);
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;

  :hover {
    color: var(--white);
  }

  .active {
    color: var(--violet);
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.a`
  color: var(--dark-sea);
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;

  :hover {
    color: var(--white);
  }

  .active {
    color: var(--violet);
  }
`;

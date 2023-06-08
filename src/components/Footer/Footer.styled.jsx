import styled from '@emotion/styled';

export const FooterStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 24px;
`;

export const Logo = styled.section`
  width: 200px;
  a {
    height: 100%;
  }
`;

export const About = styled.div`
  color: var(--dark-sea);
  font-size: 12px;
  line-height: 15px;

  a {
    color: var(--violet);
  }
`;

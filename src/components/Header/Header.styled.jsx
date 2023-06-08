import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px 20px;
`;

export const Logo = styled.div`
  width: 200px;
  margin-right: 110px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  background: var(--dark);
  border-radius: 6px;
  height: 27px;
  padding: 7px 10px;
  column-gap: 16px;
  width: 300px;
  position: relative;
`;

export const Icon = styled.div`
  width: 13px;
  height: 13px;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--dark-sea);
`;

export const FormInput = styled.div`
  flex-grow: 1;
`;

export const Input = styled.input`
  font-family: Montserrat, Roboto, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: var(--grey);
  background: none;
  outline: none;
  width: 100%;
`;

export const Box = styled.div`
  z-index: 9;
  top: 120%;
  position: absolute;
  width: 100%;
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  background: var(--dark-sea);
  border-radius: 8px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled(Link)`
  font-size: 13px;
  color: var(--grey);
  display: flex;
  align-items: center;
  column-gap: 16px;
  :hover {
    color: var(--light);
  }
`;

export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  height: 50px;
  width: 50px;
`;

export const Title = styled.div``;

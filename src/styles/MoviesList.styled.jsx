import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Movies = styled.section`
  width: 100%;
  padding: 25px 22px;
  min-height: 500px;
`;

export const List = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Movie = styled(Link)`
  background: var(--bg);
  border-radius: 8px;
  overflow: hidden;
  width: calc(100% / 5 - 20px);
  position: relative;

  :nth-of-type(5n) {
    width: calc(100% / 5);
  }

  :hover,
  :focus {
    box-shadow: 0px 1px 6px var(--violet-dark);
    transition: 200ms cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 410px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 410px);
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2em;
  color: var(--violet-dark);
  margin-bottom: 28px;
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 100px;
  right: 10px;
  display: flex;
  align-items: center;
`;

export const RatingCircle = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--violet-dark);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
  position: relative;
  overflow: hidden;
`;

export const Info = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReleaseDate = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2em;
  /* color: var(--violet-dark); */
`;

export const VoteCount = styled.div`
  color: var(--dark-sea);
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2em;
`;

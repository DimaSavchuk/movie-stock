import styled from '@emotion/styled';

export const MovieStyled = styled.section`
  display: flex;
  flex-grow: 1;
  max-width: calc(100% - 324px);
  padding: 24px;
  column-gap: 32px;
  color: var(--light);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Images = styled.div`
  display: flex;
  gap: 20px;
`;

export const Current = styled.div`
  width: 375px;
  height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2em;
`;

export const Original = styled.h2`
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25em;
  color: var(--dark-sea);
`;

export const Release = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25em;
  color: var(--dark-sea);

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.25em;
    color: var(--violet);
  }
`;

export const Overview = styled.div`
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: var(--dark-sea);

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25em;
    color: var(--violet);
  }
`;

export const Tagline = styled.div`
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.25em;
  color: var(--dark-sea);

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.25em;
    color: var(--violet);
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 10px;
`;

export const SeeMore = styled.button`
  :disabled {
    cursor: not-allowed;
    background: var(--bg);
  }
`;

export const ToWatchList = styled.button`
  background: var(--dark-sea);
  border-radius: 6px;

  :hover {
    background: #7a8690;
  }
`;

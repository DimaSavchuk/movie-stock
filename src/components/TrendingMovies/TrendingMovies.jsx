import React from 'react';

import { useGetTrendingMoviesQuery } from 'request/movie/apiMovieSlice';

import Loading from 'components/Loading/Loading';

import {
  Movies,
  List,
  Movie,
  Image,
  Wrapper,
  Title,
  Rating,
  RatingCircle,
  Info,
  ReleaseDate,
  VoteCount,
} from '../../styles/MoviesList.styled';

const TrendingMovies = ({ title }) => {
  const { data, isLoading } = useGetTrendingMoviesQuery();
  const { results } = data || {};

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Movies>
          {title && <h2>{title}</h2>}
          <List>
            {results.map(
              ({
                id,
                poster_path,
                title,
                vote_count,
                release_date,
                vote_average,
              }) => {
                const formattedRating = vote_average.toFixed(1);

                return (
                  <Movie to={`/movie?id=${id}`} key={id}>
                    <Image
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                      }}
                    />

                    <Wrapper>
                      <Title>{title}</Title>
                      <Rating>
                        <RatingCircle>{formattedRating}</RatingCircle>
                      </Rating>

                      <Info>
                        <ReleaseDate>{release_date}</ReleaseDate>
                        <VoteCount>Vote count: {vote_count}</VoteCount>
                      </Info>
                    </Wrapper>
                  </Movie>
                );
              }
            )}
          </List>
        </Movies>
      )}
    </>
  );
};

export default TrendingMovies;

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCategoryMoviesQuery } from 'request/movie/apiMovieSlice';

import Hero from 'components/Hero/Hero';
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

const CategoryMovies = () => {
  const [searchQuery] = useSearchParams();

  const id = searchQuery.get('id');

  const { data, isLoading } = useGetCategoryMoviesQuery({ id });

  const { results } = data || {};

  return (
    <>
      <Hero results={results} isLoading={isLoading} />
      {isLoading ? (
        <Loading />
      ) : (
        <Movies>
          <List>
            {results.map(
              ({
                id,
                title,
                release_date,
                poster_path,
                vote_count,
                vote_average,
              }) => {
                const formattedRating = vote_average.toFixed(1);

                return (
                  <Movie to={`/movie?id=${id}`} key={id}>
                    {poster_path ? (
                      <Image
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                        }}
                      />
                    ) : (
                      <div></div>
                    )}

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

export default CategoryMovies;

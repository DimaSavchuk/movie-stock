import React from 'react';

import { useSearchParams } from 'react-router-dom';
import { useGetMovieQuery } from 'request/movie/apiMovieSlice';

import Loading from 'components/Loading/Loading';
import VideoFrame from './Additional/VideoFrame';

import {
  MovieStyled,
  Info,
  Images,
  Current,
  Title,
  Original,
  Release,
  Overview,
  Tagline,
  Actions,
  SeeMore,
  ToWatchList,
} from './Movie.styled';

const Movie = () => {
  const [searchQuery] = useSearchParams();
  const id = searchQuery.get('id');
  const { data, isLoading } = useGetMovieQuery({ id });

  const {
    title,
    poster_path,
    status,
    release_date,
    tagline,
    overview,
    homepage,
    original_title,
  } = data ?? {};

  const handleClick = () => {
    window.location.href = homepage;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MovieStyled>
          <Images>
            <Current
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
              }}
            />
          </Images>
          <Info>
            <div>
              <Title>{title}</Title>
              <Original>{original_title}</Original>
              <Release>
                <div>
                  <span>Status: </span>
                  {status}
                </div>
                <div>
                  <span>Release date: </span>
                  {release_date}
                </div>
              </Release>

              <Tagline>
                <span>Tagline: </span>
                {tagline}
              </Tagline>

              <Overview>
                <span>Overview: </span>
                {overview}
              </Overview>

              <VideoFrame id={id} />
            </div>

            <Actions>
              <SeeMore onClick={handleClick}>See more</SeeMore>
              <ToWatchList disabled={true}>Add to watch list</ToWatchList>
            </Actions>
          </Info>
        </MovieStyled>
      )}
    </>
  );
};

export default Movie;

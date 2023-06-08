import React from 'react';

import { useGetVideoQuery } from 'request/movie/apiMovieSlice';

import Loading from 'components/Loading/Loading';
import { VideoContainer, Box } from './VideoFrame.styled';

const VideoFrame = ({ id }) => {
  const { data, isLoading } = useGetVideoQuery({ id });
  const { results } = data || {};

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <VideoContainer>
          {results.slice(0, 1).map(({ id, key }) => (
            <Box key={id}>
              <iframe
                src={`https://www.youtube.com/embed/${key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
          ))}
        </VideoContainer>
      )}
    </>
  );
};

export default VideoFrame;

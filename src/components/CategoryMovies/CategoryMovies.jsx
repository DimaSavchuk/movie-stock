import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetCategoryMovies } from 'request/movie/apiMovieSlice';

const CategoryMovies = () => {
  const [searchQuery] = useSearchParams();

  const name = searchQuery.get('name');

  // const { results } = useGetCategoryMovies;
  // console.log(results);

  console.log(name);
  return <div>CategoryMovies</div>;
};

export default CategoryMovies;

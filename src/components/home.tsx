import React, { useEffect, useState } from 'react';
import MoviesComponent from './movies';
import NavbarComponent from './navbar';
import { Routes, Route } from 'react-router-dom'
import TopRatingComponent from './top-rating';
import GenreComponent from './genre';
import VideoDetailComponent from './videoDetail';
import MoviesTrendingComponent from './moviesTrending';

function HomeComponent() {
  const [getGenreId, setGenreId] = useState(0)
  function handleMovieGenre(id: any) {
    setGenreId(id);
  }
  return (
    <div className="home">
      <NavbarComponent handleGenre={handleMovieGenre}/>
      <Routes>
        <Route path='/' element={<MoviesComponent/>} />
        <Route path='/trending' element={<MoviesTrendingComponent/>} />
        <Route path='/top-rating' element={<TopRatingComponent/>} />
        <Route path='/discover' element={<GenreComponent genreId={getGenreId}/>} />
        <Route path='/video/:id' element={<VideoDetailComponent />} />
      </Routes>
    </div>
  );
}

export default HomeComponent;
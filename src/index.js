import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails/movieDetails';
import TopRated from './pages/TopRated/topRated';
import NowPlaying from './pages/NowPlaying/nowPlaying';
import Upcoming from './pages/Upcoming/upcoming';
import SearchResults from './pages/SearchResults/searchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="moviedetails/:movieId" element={<MovieDetails />} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="nowplaying" element={<NowPlaying />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="searchmovies/:moviename" element={<SearchResults />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

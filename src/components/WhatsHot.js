// WhatsHot.js
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import './whatsHot.css'

const WhatsHot = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual TMDB API key
    const API_KEY = '8394bc210992f0e9d8650fb38fd45d65';
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results.slice(0, 20)); // Get only the top 20 movies
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
            <h1>What's Hot</h1>

     <div className='hot_movies'>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={6} sm={3} key={movie.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <p style={{textAlign:'center'}}>{movie.vote_average} <StarIcon color="primary" fontSize="small" /> <br />
            {movie.title}
            </p>                    
          </Grid>
        ))}
      </Grid>
    </div>

    </div>
    
  );
};

export default WhatsHot;

import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NewReleaseMovieCard from './NewReleaseMovieCard';

function NewReleaseCarousel({movies}) {
     return (
          <Carousel autoPlay={false} animation="slide">
            {movies.map((movie) => (
              <div key={movie.id}>
                <img style={{width:'70%'}}
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={movie.title}
                />
              <NewReleaseMovieCard movie={movie}/>
              </div>
            ))}
          </Carousel>
        );
}

export default NewReleaseCarousel
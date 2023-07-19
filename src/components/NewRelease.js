import React, {useState,useEffect} from 'react'
import NewReleaseCarousel from '../display/NewReleaseCarousel';


function NewRelease() {
     const [movies,setMovies]= useState([]);

     useEffect(()=>{
          const API_KEY= '8394bc210992f0e9d8650fb38fd45d65';
          const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // Process the API response and set the hot movie data in the state
        if (data.results) {
          setMovies(data.results);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
     },[]);


  return (
    <div>
       <h1>New Releases</h1>
       <div>
        <NewReleaseCarousel movies={movies} style={{display: 'flex'}}/>   
       </div>
     </div>
  )
}

export default NewRelease;
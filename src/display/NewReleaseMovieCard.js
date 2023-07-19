// NewReleasesMovieCard.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@mui/icons-material/Star';


const useStyles = makeStyles((theme) => ({
  movieCard: {
     width:'100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    '& img': {
      width: '20%',
      height: 'auto',
      marginBottom: theme.spacing(1),
    },
    '& h2': {
      marginBottom: theme.spacing(1),
    },
    '& p': {
      fontSize: '1rem',
    },
  },
}));

export default function NewReleaseMovieCard({ movie }) {
  const classes = useStyles();

  return (
    <div className={classes.movieCard}>
      <img style={{width:'30%',height:'500px'}}
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt={movie.title}
      />
      <div style={{width:'30%'}}>
      <h2>{movie.title}</h2>
      <p>{movie.vote_average}<StarIcon/></p>
      <p>{movie.overview}</p>
      </div>
      
    </div>
  );
}




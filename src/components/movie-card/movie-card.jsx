// Here you import the PropTypes library
import PropTypes from 'prop-types';
import './movie-card.scss';
import { Button, Card } from 'react-bootstrap';
import Link from 'react-router-dom';

// The MovieCard function component
const MovieCard = ({ movie }) => {
  return (
    <Card
      style={{ width: '18rem' }}
      className='h-100'
    >
      <Card.Img
        variant='top'
        src={movie.image}
      />
      <Card.Body>
        <Card.Title>{movie?.title}</Card.Title>
        <Card.Text>{movie?.description}</Card.Text>
        <Card.Text>Year: {movie?.year}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <Button variant='link'>Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

// Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    genreDescription: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    directorBio: PropTypes.string.isRequired,
    directorBirthday: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MovieCard;

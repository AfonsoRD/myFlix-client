// Here you import the PropTypes library
import PropTypes from 'prop-types';
import './movie-card.scss';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Button, Row, Col } from 'react-bootstrap';

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
      </Card.Body>
      <Card.Footer>
        <Row className='d-flex flex-row justify-content-between mt-auto mb-md-4'>
          <Col className='text-start'>
            <Link to={`/`}>
              <BsFillSuitHeartFill className='favorite-icon ' />
            </Link>
          </Col>
          <Col className='text-end'>
            <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
              <Button
                className='btn'
                variant='link'
                style={{ cursor: 'pointer' }}
              >
                Open
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Footer>
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
  }).isRequired
};

export default MovieCard;

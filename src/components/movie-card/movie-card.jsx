// Here you import the PropTypes library
import React from 'react';
import PropTypes from 'prop-types';
import { FavoriteIcon } from '../favorite-icon/favorite-icon';

import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// The MovieCard function component
export const MovieCard = ({ movieData, user, updateUserOnFav }) => {
  return (
    <Card
      style={{ width: '18rem' }}
      className='h-100'
    >
      <Card.Img
        variant='top'
        src={movieData?.image}
      />
      <Card.Body>
        <Card.Title>{movieData?.title}</Card.Title>
        <Card.Text>{movieData?.description}</Card.Text>
        <Card.Text>Year: {movieData?.year}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row className='d-flex flex-row justify-content-between mt-auto mb-md-4'>
          <Col className='text-start'>
            <FavoriteIcon
              user={user}
              movie={movieData}
              updateUserOnFav={updateUserOnFav}
            />
          </Col>
          <Col className='text-end'>
            <Link to={`/movies/${encodeURIComponent(movieData.id)}`}>
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
  movieData: PropTypes.shape({
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

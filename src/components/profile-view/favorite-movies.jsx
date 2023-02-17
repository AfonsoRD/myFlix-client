import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const FavoriteMovies = ({ movies, storedUser }) => {
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const favoriteMoviesList = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );

  console.error('no movies');
  console.log('1', favoriteMoviesList.length);

  return (
    <Row>
      {favoriteMoviesList.length === 0 ? (
        <Col>The list of favorite movies is empty</Col>
      ) : (
        <>
          <div className='text-start h2 mb-4'>List of favorite movies</div>
          {favoriteMoviesList.map((movie) => (
            <Col
              className='mb-5'
              key={movie.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Card
                style={{ width: '18rem' }}
                className='h-100'
              >
                <Card.Img
                  variant='top'
                  src={movie?.image}
                />
                <Card.Body>
                  <Card.Title>{movie?.title}</Card.Title>
                  <Card.Text>{movie?.description}</Card.Text>
                  <Card.Text>Year: {movie?.year}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Row className='d-flex flex-row justify-content-between mt-auto mb-md-4'>
                    <Col className='text-end'></Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

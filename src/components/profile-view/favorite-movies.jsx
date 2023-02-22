import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const FavoriteMovies = ({ movies, storedUser }) => {
  const [user, setUser] = useState(storedUser ? storedUser : null);

  const favoriteMoviesList = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );

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
              <MovieCard
                movieData={movie}
                user={user}
                updateUserOnFav={(user) => {
                  console.log('Update User called', user);
                  setUser(user);
                  localStorage.setItem('user', JSON.stringify(user));
                }}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

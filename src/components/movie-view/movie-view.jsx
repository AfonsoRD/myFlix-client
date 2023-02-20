import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import { FavoriteIcon } from '../favorite-icon/favorite-icon';
import { MovieCard } from '../movie-card/movie-card';

// MovieView receives property from the MainView - movies
export const MovieView = ({ movies, user, updateUserOnFav }) => {
  console.log('MovieView prop', updateUserOnFav);
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  const similarMovies = movies.filter((filteredMovie) => {
    return (
      filteredMovie.genre === movie.genre && filteredMovie.title !== movie.title
    );
  });

  return (
    <>
      <Row className='d-flex flex-row-reverse p-3'>
        <Col
          md={5}
          className='text-center text-md-end'
        >
          <img
            src={movie.image}
            alt={`Poster for ${movie.title}`}
            className='img-fluid h-100 w-auto movie-view-img'
          />
        </Col>
        <Col
          md={7}
          className='d-flex flex-column'
        >
          <Row className='d-flex flex-row  justify-content-between'>
            <Col
              md={9}
              className='d-flex flex-column'
            >
              <h3 className='my-0'>
                <span>Title: </span>
                <span>{movie.title}</span>
              </h3>
              <h5 className='mt-1 text-left text-muted'>
                <span>Director: </span>
                <span>{movie.directorName}</span>
              </h5>
              <h6>
                <span>Year: </span>
                <span>{movie.year}</span>
              </h6>
            </Col>

            <Col
              md={3}
              className='align-self-end mb-2 text-end'
            >
              <span>Genre: </span>
              <span className='fw-bolder'>{movie.genre}</span>
            </Col>
          </Row>
          <div className='mt-md-5 mb-4'>
            <div className='text-decoration-underline mb-2'>Description: </div>
            <span>{movie.description}</span>
          </div>

          <Row className='d-flex flex-row justify-content-between mt-auto mb-md-4'>
            <Col className='text-start'>
              <FavoriteIcon
                user={user}
                movie={movie}
                updateUserOnFav={updateUserOnFav}
              />
            </Col>
            <Col className='text-end'>
              <Link to={`/`}>
                <Button
                  className='btn btn-primary'
                  style={{ cursor: 'pointer' }}
                >
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <h2 className='mt-0'>Similar movies</h2>
        <hr />
        {similarMovies.map((movie) => (
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
      </Row>
    </>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      genreDescription: PropTypes.string.isRequired,
      directorName: PropTypes.string.isRequired,
      directorBio: PropTypes.string.isRequired,
      directorBirthday: PropTypes.string.isRequired
    })
  ).isRequired
};

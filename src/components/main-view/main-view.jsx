import { useState, useEffect } from 'react';
import LoginView from '../login-view/login-view';
import SignupView from '../signup-view/signup-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import { Row, Col, Button } from 'react-bootstrap';

const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch('https://movie-api-drab.vercel.app/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((data) => {
          return {
            id: data._id,
            title: data.Title,
            image: data.ImageURL,
            description: data.Description,
            genre: data.Genre.Name,
            genreDescription: data.Genre.Description,
            directorName: data.Director.Name,
            directorBio: data.Director.Bio,
            directorBirthday: data.Director.Birthday,
            year: data.Year
          };
        });
        setMovies(moviesFromApi);
        console.log('movies from api:', data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  //User view for Login

  return (
    <Row className='justify-content-md-center'>
      {!user ? (
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or
          <SignupView />
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>
      ) : movies.length === 0 ? (
        <div>The list of movies is empty</div>
      ) : (
        <>
          {movies.map((movie) => (
            <Col
              className='mb-5'
              key={movie.id}
              md={3}
            >
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
          <Button
            className='mb-2'
            variant='primary'
            type='submit'
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          >
            Sign out
          </Button>
        </>
      )}
    </Row>
  );
};

export default MainView;

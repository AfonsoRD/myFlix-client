import { useState, useEffect } from 'react';
import LoginView from '../login-view/login-view';
import SignupView from '../signup-view/signup-view';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import ProfileView from '../profile-view/profile-view';
import NavigationBar from '../navigation-bar/navigation-bar';
import { Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const [movies, setMovies] = useState([]);
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
        //console.log(moviesFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  //User view for Login

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className='justify-content-md-center'>
        <Routes>
          <Route
            path='/signup'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/movies/:movieId'
            element={
              <>
                {!user ? (
                  <Navigate
                    to='/login'
                    replace
                  />
                ) : movies.length === 0 ? (
                  <Col>The list of movies is empty!</Col>
                ) : (
                  <Col>
                    <MovieView
                      movies={movies}
                      user={user}
                      updateUserOnFav={(user) => {
                        console.log('Update User called', user);
                        setUser(user);
                        localStorage.setItem('user', JSON.stringify(user));
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/'
            element={
              <>
                {!user ? (
                  <Navigate
                    to='/login'
                    replace
                  />
                ) : movies.length === 0 ? (
                  <Col>The list of movies is empty!</Col>
                ) : (
                  <>
                    {movies.map((movie) => (
                      <Col
                        className='mb-5 '
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
                    <Row>
                      <Col className='text-end mt-2'>
                        <Button
                          onClick={() => {
                            setUser(null);
                            setToken(null);
                            localStorage.clear();
                          }}
                          variant='primary'
                          size='lg'
                          className='mb-5'
                        >
                          Sign out
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            }
          />
          {/*User Profile view*/}
          <Route
            path='/users/:username'
            element={
              <>
                {!user ? (
                  <Navigate
                    to='/login'
                    replace
                  />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col>
                    <ProfileView movies={movies} />
                  </Col>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};

export default MainView;

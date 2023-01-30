import { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://movie-api-drab.vercel.app/movies')
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
      });
  }, []);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
export default MainView;

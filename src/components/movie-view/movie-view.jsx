import useParams from 'react-router';
import Link from 'react-router-dom';
import './movie-view.scss';

const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  return (
    <div className='main-container text-center'>
      <div>
        <img
          className='w-50'
          src={movie?.image}
        />
      </div>
      <div className='text-start'>
        <div>
          <span>Year: </span>
          <span>{movie?.year}</span>
        </div>
        <div>
          <span>Title: </span>
          <span>{movie?.title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie?.description}</span>
        </div>
        <br />
        <div>
          <span>Genre: </span>
          <span>{movie?.genre}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie?.genreDescription}</span>
        </div>
        <br />
        <div>
          <span>Director: </span>
          <span>{movie?.directorName}</span>
        </div>
        <div>
          <span>Birthday: </span>
          <span>{movie?.directorBirthday}</span>
        </div>
        <div>
          <span>Bio: </span>
          <span>{movie?.directorBio}</span>
        </div>
      </div>
      <br />
      <Link to={`/`}>
        <button
          className='btn btn-primary'
          style={{ cursor: 'pointer' }}
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default MovieView;

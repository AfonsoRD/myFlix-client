const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie?.image} />
      </div>
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
      <br />
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};

export default MovieView;

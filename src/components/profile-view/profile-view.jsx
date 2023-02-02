import { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './profile-view.scss';

const ProfileView = ({ movies, onUpdateUserInfo }) => {
  const [user, setUser] = useState({});

  const favoriteMovieList = movies.filter((movies) => {});

  const getUser = () => {};

  const handleSubmit = (e) => {};

  const removeFav = (id) => {};

  const handleUpdate = (e) => {};

  useEffect(() => {}, []);

  return (
    <div>
      <p>User: {user.Username}</p>
      <p>Email: {user.Email}</p>

      <div>
        <h2>Favorite Movies</h2>
        {favoriteMovieList.map((movies) => {
          return (
            <div key={movies._id}>
              <img src={movies.ImagePath} />
              <Link to={` /movies/${movies._id}`}>
                <h4>{movies.Title}</h4>
              </Link>
              <button
                variant='secondary'
                onClick={() => removeFav(movies.id)}
              >
                {' '}
                Remove from list
              </button>
            </div>
          );
        })}
      </div>
      <form
        className='profile-form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2>Want to change some info?</h2>
        <label>Username: </label>
        <input
          type='text'
          name='username'
          defaultValue={user.Username}
          onChange={(e) => handleUpdate(e)}
        />
        <label>Password: </label>
        <input
          type='password'
          name='Password'
          defaultValue={user.Password}
          onChange={(e) => handleUpdate(e)}
        />
        <label>Email: </label>
        <input
          type='email'
          name='email'
          defaultValue={user.email}
          onChange={(e) => handleUpdate(e)}
        />
        <button
          variant='primary'
          type='submit'
        ></button>
      </form>
    </div>
  );
};

export default ProfileView;

import { Link } from 'react-router-dom';
import React from 'react';
import { BsFillSuitHeartFill } from 'react-icons/bs';

export const FavoriteIcon = ({ user, movie, updateUserOnFav }) => {
  const token = localStorage.getItem('token');

  const alreadyFavorite = user.FavoriteMovies.find(
    (favMovieId) => favMovieId === movie.id
  );

  const toggleFavorite = () => {
    if (!token) return;

    const url = `https://movie-api-drab.vercel.app/users/${user.Username}/movies/${movie.id}`;

    let requestOptions = {
      method: '',
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    let resultAlert = '';
    let iconChange;

    if (alreadyFavorite) {
      console.log('already favorite');
      requestOptions.method = 'DELETE';
      resultAlert = `${movie.title} is deleted from the list of favorites`;
      iconChange = () =>
        document.querySelector('svg').classList.remove('favorite-movie');
    } else {
      console.log('add to favorite');
      requestOptions.method = 'POST';
      resultAlert = `${movie.title} is added to the list of favorites`;
      iconChange = () =>
        document.querySelector('svg').classList.add('favorite-movie');
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`${resultAlert}`);
        console.log(updateUserOnFav);
        updateUserOnFav(data);
        document.querySelector('svg').classList.add('favorite-movie');
      })
      .catch((e) => {
        alert('Something went wrong');
      });
  };

  return (
    <Link
      to='/'
      onClick={() => toggleFavorite()}
      className='favorite-icon'
      id='favMovieButton'
    >
      {alreadyFavorite ? (
        <BsFillSuitHeartFill className='favorite-movie' />
      ) : (
        <BsFillSuitHeartFill />
      )}
    </Link>
  );
};

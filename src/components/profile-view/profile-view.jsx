import React from 'react';
import { UpdateView } from './update-view';
import { UserInfo } from './user-info';
import { DeleteUser } from './delete-user';
import { FavoriteMovies } from './favorite-movies';

const ProfileView = ({ movies }) => {
  const storedToken = localStorage.getItem('token');
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <UserInfo user={storedUser} />

      <UpdateView
        storedToken={storedToken}
        storedUser={storedUser}
      />
      <DeleteUser
        storedToken={storedToken}
        storedUser={storedUser}
      />
      <FavoriteMovies
        storedUser={storedUser}
        movies={movies}
      />
    </>
  );
};

export default ProfileView;

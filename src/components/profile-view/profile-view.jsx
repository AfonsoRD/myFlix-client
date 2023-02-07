import React from 'react';
import { UpdateView } from './update-view';
import { UserInfo } from './user-info';
import { DeleteUser } from './delete-user';

const ProfileView = () => {
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
    </>
  );
};

export default ProfileView;

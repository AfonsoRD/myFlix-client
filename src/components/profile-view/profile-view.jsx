import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { UpdateView } from './update-view';
import { UserInfo } from './user-info';

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
    </>
  );
};

export default ProfileView;

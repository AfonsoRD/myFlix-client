import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { UpdateView } from './update-view';

const ProfileView = () => {
  const storedToken = localStorage.getItem('token');

  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Row>
        <Col>
          <div>Profile view goes here</div>
        </Col>
      </Row>

      <UpdateView
        storedToken={storedToken}
        storedUser={storedUser}
      />
    </>
  );
};

export default ProfileView;

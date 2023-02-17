import { Button, Col } from 'react-bootstrap';

export const DeleteUser = ({ storedToken, storedUser }) => {
  const handleDeregister = () => {
    const userWarning = confirm(
      `Are you sure that you want to delete your account? All information will be lost and cannot be recovered.`
    );

    userWarning === false
      ? alert('Your request has been cancelled.')
      : fetch(
          `https://movie-api-drab.vercel.app/users/${storedUser.Username}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${storedToken}`,
              'Content-Type': 'application/json'
            }
          }
        )
          .then((response) => {
            if (response.ok) {
              alert('Account successfully deleted');
              localStorage.clear();
              window.location.reload();
            } else {
              alert('Something went wrong');
            }
          })
          .catch((e) => console.log(e));
  };

  return (
    <Col
      md={5}
      className='text-end px-4'
    >
      <div>
        <Button
          onClick={() => handleDeregister(storedUser._id)}
          className='button-delete'
          variant='danger'
        >
          Delete Account
        </Button>
      </div>
    </Col>
  );
};

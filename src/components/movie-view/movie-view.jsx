import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Button, Row, Col } from 'react-bootstrap';
import './movie-view.scss';

const MovieView = ({ movies, user }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  return (
    <>
      <Row className='d-flex flex-row-reverse p-3'>
        <Col
          md={5}
          className='text-center text-md-end'
        >
          <img
            src={movie?.image}
            alt={`Poster for ${movie?.title}`}
            className='img-fluid h-100 w-auto movie-view-img'
          />
        </Col>
        <Col
          md={7}
          className='d-flex flex-column'
        >
          <Row className='d-flex flex-row  justify-content-between'>
            <Col
              md={9}
              className='d-flex flex-column'
            >
              <h3 className='my-0'>
                <span>Title: </span>
                <span>{movie?.title}</span>
              </h3>
              <h5 className='mt-1 text-left text-muted'>
                <span>Director: </span>
                <span>{movie?.directorName}</span>
              </h5>
              <h6>
                <span>Year: </span>
                <span>{movie?.year}</span>
              </h6>
            </Col>

            <Col
              md={3}
              className='align-self-end mb-2 text-end'
            >
              <span>Genre: </span>
              <span className='fw-bolder'>{movie.genre}</span>
            </Col>
          </Row>
          <div className='mt-md-5 mb-4'>
            <div className='text-decoration-underline mb-2'>Description: </div>
            <span>{movie.description}</span>
          </div>

          <Row className='d-flex flex-row justify-content-between mt-auto mb-md-4'>
            <Col className='text-start'>
              <Link to={`/`}>
                <BsFillSuitHeartFill className='favorite-icon' />
              </Link>
            </Col>
            <Col className='text-end'>
              <Link to={`/`}>
                <Button
                  className='btn btn-primary'
                  style={{ cursor: 'pointer' }}
                >
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MovieView;

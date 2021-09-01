import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
const Home = () => <Container>
    <Row>
        <Col >
            <img src={rectangle} />

        </Col>

        <Col  >
            <img src={logo} className="img-fluid" alt="" />
            <h2>Welcome to SabanaTweet</h2>

            <div className="d-grid gap-2">

                <Link to="/login"> <Button variant="primary" size="lg">
                    Login now
                </Button> </Link>

            </div>
            <p>Don't have an account?  <Link to="/passwordrecovery">Join free today </Link> </p>

            <Button variant="secondary" size="lg">
                Sign up
            </Button>

        </Col>

    </Row>

</Container>;



export default Home;



import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
const Home = () => <div class="container-responsive">
    <Row>
        <Col >
            <img src={rectangle} class="img-responsive w-100" />

        </Col>

        <Col >
            <img src={logo} className="img-responsive" alt="" />
            <h2>Welcome to SabanaTweet</h2>

            <div className="d-grid gap-2">

                <Link to="/login"> <Button variant="primary" size="lg">
                    Login now
                </Button> </Link>

            </div>
            <p>Don't have an account?  <Link to="/signup">Join free today </Link> </p>

            <Button variant="secondary" size="lg">
                Sign up
            </Button>

        </Col>

    </Row>

</div>;



export default Home;



import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
const SignUp = () => < Container >
    <Row>

        <Col>

            <img src={logo} className="img-fluid" alt="" />
            <h6>SabanaTweet</h6>
            <h2>Create your account</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Login now
                    </Button>

                </div>
                <p><Link to="/signup">Forgot password? </Link> </p>

            </Form>

            <p>Don't have an account?  <Link to="/signup">Join free today </Link> </p>
        </Col>
    </Row>
</Container>;


export default SignUp;
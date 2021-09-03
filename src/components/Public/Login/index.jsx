import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
const Login = () => <div class="container-fluid vh-100">

    <div class="m-0 vh-100 row justify-content-center align-items-center ">

        <div class="col-auto p-5 block-center mb-3">
            <div class="mb-3">
                <Link to="/">
                    <img src={logo} class="img-responsive mb-3" alt="" />
                </Link>

                <h6>SabanaTweet</h6>
                <h2>Login to your account</h2>
            </div>

            <Form>
                <div class="row mb-3">
                    <Form.Group class="mb-3" controlId="formBasicEmail">
                        <Form.Label >Email or username</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </div>
                <div class="row mb-3">
                    <Form.Group class="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div class="row mb-3">
                    <p><Link to="/signup">Forgot password? </Link> </p>
                </div>

                <div class="row mb-3">
                    <div class="d-grid gap-2 mb-3">
                        <Link to="/home">
                            <button type="button" class="btn w-100 btn-primary btn-lg btn-block">Login now</button>
                        </Link>


                    </div>

                </div>
            </Form>
            <div class="text-center">
                <p >Don't have an account?  <Link to="/signup">Join free today </Link> </p>
            </div>


        </div>
    </div>

</div>;


export default Login;
import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
const SignUp = () => <div class="container-fluid vh-100" >
    <div class="m-0 vh-100 row justify-content-center align-items-center ">

        <div class="col-auto p-7 block-center mb-3">

            <div class="mb-5">
                <Link to="/">
                    <img src={logo} class="img-responsive mb-3" alt="" />
                </Link>
                <h6>SabanaTweet</h6>
                <h2>Create your account</h2>
            </div>


            <Form>
                <div class="mb-4">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </div>

                <div className="d-grid gap-2 mb-4">
                    <button type="button" class="btn w-100 btn-primary btn-lg btn-block">Sign Up</button>

                </div>

            </Form>
            <div class="text-center">
                <p>Already have an account?  <Link to="/login">Login </Link> </p>
            </div>

        </div>
    </div>
</div>;


export default SignUp;
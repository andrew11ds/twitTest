import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
import './../../../../src/App.css';
import './../../../CSS/styleSignUp.css';

const SignUp = () => <div className="container-fluid vh-100" >
    <div className="m-0 vh-100 row justify-content-center align-items-center ">

        <div className="col-auto p-7 block-center mb-3">

            <div className="mb-4">
                <Link to="/">
                    <img src={logo} className="img-responsive mb-3" alt="" />
                </Link>
                <h6 className="t-text-sgu">SabanaTweet</h6>
                <h2 className="t-title-sgu">Create your account</h2>
            </div>


            <Form>
                <div className="mb-4">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="t-text-sgu">Name</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label className="t-text-sgu">Username</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="username" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="t-text-sgu">Email</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="t-text-sgu">Password</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label className="t-text-sgu" >Password Confirmation</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </div>

                <div className="d-grid gap-2 mb-4">
                    <button type="button" className="btn w-100 btn-primary btn-lg btn-block btn-properties-sgu">Sign Up</button>

                </div>

            </Form>
            <div className="text-center">
                <p className="t-text-sgu">Already have an account?  <Link to="/login">Login </Link> </p>
            </div>

        </div>
    </div>
</div>;


export default SignUp;
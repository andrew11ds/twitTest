import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Metadata from './../../common/Metadata'
import logo from "./../../../images/tweetlogo.jpg";
import './../../../../src/App.css';
import './../../../CSS/styleLogin.css';

const Login = () => <div className="container-fluid vh-100">

    <Metadata
        title="Login"
        content={"Welcome to SabanaTweet, let's login"}
    />

    <div className="m-0 vh-100 row justify-content-center align-items-center ">

        <div className="col-auto p-5 block-center mb-3">
            <div className="mb-3">
                <Link to="/">
                    <img src={logo} className="img-responsive mb-3" alt="" />
                </Link>

                <h6 className="t-text-login">SabanaTweet</h6>
                <h2 className="t-title-login">Login to your account</h2>
            </div>

            <Form>
                <div className="row mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="t-text-login">Email or Username</Form.Label>
                        <Form.Control className="t-text2-login textfield-properties-login" type="email" placeholder="Enter email" />
                    </Form.Group>
                </div>
                <div className="row mb-3">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="t-text-login">Password</Form.Label>
                        <Form.Control className="t-text2-login textfield-properties-login" type="password" placeholder="Password" />
                    </Form.Group>
                </div>
                <div className="row mb-3">
                    <p className="t-text2-login"><Link to="/recoverpassword">Forgot password? </Link> </p>
                </div>

                <div className="row mb-3">
                    <div className="d-grid gap-2 mb-3">
                        <Link to="/home">
                            <button type="button" className="btn w-100 btn-primary btn-lg btn-block btn-properties-login">Login now</button>
                        </Link>


                    </div>

                </div>
            </Form>
            <div className="text-center">
                <p className="t-text-login">Don't have an account?  <Link to="/signup">Join free today </Link> </p>
            </div>


        </div>
    </div>

</div>;


export default Login;
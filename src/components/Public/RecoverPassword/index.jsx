import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../../images/tweetlogo.jpg";
import './../../../../src/App.css';
import './../../../CSS/styleLogin.css';

const RecoverPassword = () => <div className="container-fluid vh-100">

    <div className="m-0 vh-100 row justify-content-center align-items-center ">

        <div className="col-auto p-5 block-center mb-3">
            <div className="mb-3">
                <Link to="/">
                    <img src={logo} className="img-responsive mb-3" alt="" />
                </Link>

                <h6 className="t-text-login">SabanaTweet</h6>
                <h2 className="t-title-login">Recover your password</h2>
            </div>

            <Form>
                <div className="row mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="t-text-login">Email or Username</Form.Label>
                        <Form.Control className="t-text2-login textfield-properties-login" type="email" placeholder="Enter email or username" />
                    </Form.Group>
                </div>
                <div className="row mb-3">
                    <div className="d-grid gap-2 mb-3">
                        <Link to="/login">
                            <button type="button" className="btn w-100 btn-primary btn-lg btn-block btn-properties-login">Recover your password</button>
                        </Link>


                    </div>

                </div>
            </Form>
            <div className="text-center">
                <p className="t-text-login">Return to  <Link to="/login">Login</Link> </p>
            </div>


        </div>
    </div>

</div>;


export default RecoverPassword;
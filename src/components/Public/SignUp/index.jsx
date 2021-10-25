import { Helmet } from "react-helmet";
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Metadata from './../../common/Metadata'
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
import { useState, useContext } from "react";
import { AuthContext } from '../../../context/AuthContext';
import { useHistory } from  "react-router";
import { signUpUser } from "./../../../services/userService";
import './../../../../src/App.css';
import './../../../CSS/styleSignUp.css';

const SignUp = () =>{ 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const auth = useContext(AuthContext);
    const history = useHistory();
    const handleSingUp = (event) => {
        console.log("Hola mundo");
        event.preventDefault();
       signUpUser(username, password, passwordConfirmation, name, email).then((data) => {
            if(data.role === "registered"){
                // const user = data.data;
                history.push("/");
                
            }
       }).catch((err) => {
            console.log("err",err);
       })

    }
    
    return(<div className="container-fluid vh-100" >
    <Metadata
        title="Sign up"
        content={"Let's join Sabanatweet!"}
    />
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
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="name" placeholder="Name" onChange={e=>setName(e.target.value)} value={name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label className="t-text-sgu">Username</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="username" placeholder="Username" onChange={e=>setUsername(e.target.value)} value={username}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="t-text-sgu">Email</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)} value={email}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="t-text-sgu">Password</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label className="t-text-sgu" >Password Confirmation</Form.Label>
                        <Form.Control className="t-text2-sgu  textfield-properties-sgu" type="password" placeholder="Confirm Password" onChange={e=>setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
                    </Form.Group>
                </div>

                <div className="d-grid gap-2 mb-4">
                    <Link to="/home">
                        <button type="button" className="btn w-100 btn-color-blue btn-lg btn-block btn-properties-login" onClick={handleSingUp}>Sign up</button>
                    </Link>

                </div>

            </Form>
            <div className="text-center">
                <p className="t-text-sgu">Already have an account?  <Link to="/login">Login </Link> </p>
            </div>

        </div>
    </div>
</div>)};


export default SignUp;
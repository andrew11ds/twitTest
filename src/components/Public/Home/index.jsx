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
            <div class="container h-100">
                <div class="m-0 vh-100 row justify-content-center align-items-center ">
                    <div class="col-auto p-5 block-center">
                        <div class="mb-4 text-center">
                            <Link to="/">
                                <img src={logo} class="img-responsive" alt="" />
                            </Link>

                        </div>
                        <div class="mb-4">
                            <h2>Welcome to SabanaTweet</h2>
                        </div>

                        <div class="d-grid gap-2 mb-4">

                            <Link to="/login">
                                <button type="button" class="btn w-100 btn-lg btn-block btn-outline-primary ">Login now</button>
                            </Link>

                        </div>
                        <div class="d-grid gap-2">
                            <p>Don't have an account?  <Link to="/signup" >Join free today </Link> </p>
                        </div>

                        <div class="d-grid gap-2 mb-4">
                            <Link to="/signup">
                                <button type="button" class="btn w-100 btn-outline-primary btn-lg btn-block">Sign up</button>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>


        </Col>

    </Row>

</div>;



export default Home;



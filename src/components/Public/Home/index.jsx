import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Metadata from './../../common/Metadata'
import logo from "./../../../images/tweetlogo.jpg";
import rectangle from "./../../../images/rectangle.jpg";
import './../../../../src/App.css';
import './../../../CSS/styleHome.css';

const Home = () => <div className="container-responsive">

    <Metadata
        title="Welcome"
        content={"Welcome to SabanaTweet"}
    />

    <Row>
        <Col >
            <img src={rectangle} className="img-responsive w-100" />

        </Col>

        <Col >
            <div className="container h-100">
                <div className="m-0 vh-100 row justify-content-center align-items-center ">
                    <div className="col-auto p-5 block-center">
                        <div className="mb-4 text-center">
                            <Link to="/">
                                <img src={logo} classNAme="img-responsive" alt="" />
                            </Link>

                        </div>
                        <div className="mb-4">
                            <h2 className="t-title-home">Welcome to SabanaTweet</h2>
                        </div>

                        <div className="d-grid gap-2 mb-4">

                            <Link to="/login">
                                <button type="button" className="btn w-100 btn-lg btn-block btn-color-white t-btn-home btn-properties-home">Login now</button>
                            </Link>

                        </div>
                        <div className="d-grid gap-2">
                            <p className="t-text-home">Don't have an account?  <Link to="/signup" >Join free today </Link> </p>
                        </div>

                        <div className="d-grid gap-2 mb-4">
                            <Link to="/signup">
                                <button type="button" className="btn w-100 btn-color-white btn-lg btn-block t-btn-home btn-properties-home">Sign up</button>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>


        </Col>

    </Row>

</div>;



export default Home;



import { width } from 'dom-helpers';
import { Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../images/tweetlogo.jpg";
import './../../CSS/styleTimeline.css';


const Timeline = () => <div class="container-responsive">
    <Row>
        <div class="col-md-2 border-right ">
            <div class="m-4 row justify-content-end align-items-end">
                <div class="col ">
                    <Link to="/">
                        <img src={logo} class="img-responsive logo-properties" />
                    </Link>
                </div>
            </div>
            <div class="m-3 vh-100 row justify-content-end align-items-end row-properties">

                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Home</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Explore</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Notifications</h2>
                        </Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Messages</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Bookmarks</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Lists</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">Profile</h2>
                        </Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col ">
                        <Link class="color-text">
                            <h2 class="t-text">More</h2>
                        </Link>

                    </div>
                </div>
                <div class="row">
                    <Link >
                        <button type="button" class="btn w-100 btn-primary btn-lg btn-block btn-properties">Tweet</button>
                    </Link>
                </div>
            </div>
        </div >

        <div class="col-md-7 borders">
            <div class="m-0 vh-100 row justify-content-center align-items-center ">
            </div>
        </div>

        <div class="col-md-3 border-left">
            <div class="m-3 row justify-content-start align-items-start search-heigth">
                <div class="row mb-3">
                    <Form>
                        <Form.Group class="mb-3" controlId="formBasicSearch">
                            <Form.Control className="search-properties" type="name" placeholder="Search Twitter" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div class="m-4 vh-100 row justify-content-start align-items-start trend-properties">
                <div class="col">
                    <div class="row sidebar-height mb-3">
                        <h3 class="t-text sidebar-title">Paris Trend</h3>
                    </div>

                    <div class="row sidebar-height">
                        <h2 class="sidebar-text">1. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>

                    </div>

                    <div class="row border-top sidebar-height">
                        <h2 class="sidebar-text">2. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>
                    </div>
                    <div class="row border-top sidebar-height">
                        <h2 class="sidebar-text">3. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>
                    </div>
                    <div class="row border-top sidebar-height">
                        <h2 class="sidebar-text">4. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>
                    </div>
                    <div class="row border-top sidebar-height">
                        <h2 class="sidebar-text">5. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>
                    </div>
                    <div class="row border-top sidebar-height">
                        <h2 class="sidebar-text">6. Trending</h2>
                        <h2 class="t-text">#JessieMueller</h2>
                        <h2 class="text-count">456K Tweets</h2>
                    </div>
                    <div class="row border-top sidebar-height">
                        <Link>
                            <h2 class="more-tweets">Show more</h2>
                        </Link>
                    </div>

                </div>
            </div>

        </div>

    </Row >
</div >;



export default Timeline;



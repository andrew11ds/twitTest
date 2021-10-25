import { width } from 'dom-helpers';
import { Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Feed from "./../Tweets"
import tweetTest from './tweetTest.json'
import Metadata from '../../common/Metadata'
import logo from "./../../../images/tweetlogo.jpg";
import home from "./../../../icons/home.svg";
import explore from "./../../../icons/explore.svg";
import notifications from "./../../../icons/notifications.svg";
import bookmarks from "./../../../icons/bookmarks.svg";
import messages from "./../../../icons/messages.svg";
import lists from "./../../../icons/lists.svg";
import profile from "./../../../icons/profile.svg";
import more from "./../../../icons/more.svg";
import './../../../CSS/styleTimeline.css';
import { AuthContext } from '../../../context/AuthContext'; 
import { useContext, useState } from 'react';
import { createTweetUser, getTweets } from "./../../../services/userService";
import { useHistory } from  "react-router";
import Login from '../../Public/Login';
import Home from '../../Public/Home';



const Timeline = () => {

    const { isLoggedIn, logout, user} = useContext(AuthContext);
    const isAuth = isLoggedIn();
    console.log("logged?", isAuth);
    console.log("count");
    var count = 0;
    const [content, setContent] = useState("");
    const history = useHistory();
    const handlecreateTweet = (event) => {
        console.log("User: ", user.token);
        event.preventDefault();
        createTweetUser(content, user.token).then((data) => {
            // if("){
                // const user = data.data;
                
                console.log("Content ", data);
                alert('Tweet sent!');
                content.text = "";
                history.push("/");
                
            // }
       }).catch((err) => {
            console.log("err",err);
       })

    }
    if (isAuth){
        
        return (
            <div class="container-responsive">
                <Metadata
                    title="Timeline"
                    content={"Let's explore what the world has to show"}
                />
    
                <Row>
                    <div class="col-md-2 border-right ">
                        <div class="m-5 row justify-content-end align-items-end">
                            <div class="col ">
                                <Link to="/">
                                    <img src={logo} class="img-responsive logo-properties" />
                                </Link>
                            </div>
                        </div>
                        <div class="m-3 vh-100 row justify-content-end align-items-end row-properties">
    
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text" > <img src={home} class=" img-responsive img-icon" />Home</h2>
                                    </Link>
    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text">  <img src={explore} class="img-responsive img-icon " /> Explore</h2>
                                    </Link>
    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"> <img src={notifications} class="img-responsive img-icon" />Notifications</h2>
                                    </Link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"><img src={messages} class="img-responsive img-icon" />Messages</h2>
                                    </Link>
    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"><img src={bookmarks} class="img-responsive img-icon" />Bookmarks</h2>
                                    </Link>
    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"><img src={lists} class="img-responsive img-icon" />Lists</h2>
                                    </Link>
    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"><img src={profile} class="img-responsive img-icon" />Profile</h2>
                                    </Link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col ">
                                    <Link to="/dummy" class="color-text">
                                        <h2 class="t-text"><img src={more} class="img-responsive img-icon" />More</h2>
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
                        <div class="m-4 row justify-content-start align-items-start mb-3">
                            <h3 class="t-text">Home</h3>
    
                        </div>
                        <div class="m-4 row justify-content-start align-items-start mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon">
                                    <i className="fas fa-pencil-alt prefix"></i>
                                    </span>
                                </div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={e=>setContent(e.target.value)} value={content}></textarea>
                        </div>
                        <div class="m-4 row justify-content-start align-items-start mb-3">
                            <Link >
                                <button type="button" class="btn w-100 btn-primary btn-lg btn-block btn-properties" onClick={handlecreateTweet}>Send</button>
                            </Link>
    
                        </div>
    
                        </div>
                        <Feed tweets={tweetTest} />
                    </div>

                    
    
                    <div class="col-md-3 border-left">
                        <div class="m-3 vh-100 row justify-content-start align-items-start search-heigth">
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
                                {/* <div>
                                    {getTweets(user.token).then((data) =>{
                                        console.log("count", count);
                                        console.log("tweets", data.data[1].user);
                                        
                                            data.data.map((tweet) => {
                                                count = count + 1;
                                                <div class="row border-top sidebar-height">
                                                    <h2 class="sidebar-text">..</h2>
                                                    <h2 class="t-text">{tweet.content}</h2>
                                                    
                                                </div>
            
                                            });
                                    }).catch((err) => {
                                        console.log("err",err);
                                    })
                                    }

                                </div> */}
    
                                <div class="row sidebar-height">
                                    <h2 class="sidebar-text">1. Trending</h2>
                                    <h2 class="t-text">#JessieMueller</h2>
                                    <h2 class="text-count">456K Tweets</h2>
    
                                </div>
                                <div class="row sidebar-height">
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
                        <div class="m-3 vh-100 row justify-content-start align-items-start search-heigth">
                                <Link >
                                    <button type="button" class="btn w-100 btn-primary btn-lg btn-block btn-props" onClick={logout}>Logout</button>
                                    
                                </Link>
                        </div>
                    </div>
    
                </Row >
            </div >);
    }else{
        return null;
    }
    
};



export default Timeline;



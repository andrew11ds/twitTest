import prof from './../../icons/profile.svg'
import comment from './../../icons/comment.svg'
import like from './../../icons/like.svg'
import rt from './../../icons/rt.svg'
import upload from './../../icons/upload.svg'
import verified from './../../icons/verified.svg'
import { Link } from 'react-router-dom';
import './../../CSS/styleFeed.css';

const Tweet = ({ user, content, img, name }) => {
    return (
        <>
            <div class="row border-botton mb-4">
                <div class="col-md-1 icon-size ">
                    <img src={prof} />
                </div>
                <div class="col-md-11">
                    <div class="row justify-content-center align-items-center mb-2">
                        <div class="col">
                            <Link>
                                <h2 className="name-prop">{name}</h2>
                            </Link>

                        </div>
                        <div class="col">
                            <img src={verified} />
                        </div>
                        <div class="col">
                            <h2 className="user-prop">{user}</h2>
                        </div>

                    </div>
                    <div class="row justify-content-start align-items-start mb-2">
                        <h2 className="content-prop">{content}</h2>
                    </div>
                    <div class="row mb-3">
                        <img src={img} className="img-prop" alt="" />
                    </div>
                    <div class="row mb-3 m-3">
                        <div class="col md-3">
                            <Link>
                                <img src={comment} />
                            </Link>

                        </div>
                        <div class="col md-3">
                            <Link>
                                <img src={rt} />
                            </Link>

                        </div>
                        <div class="col md-3">
                            <Link>
                                <img src={like} />
                            </Link>

                        </div>
                        <div class="col md-3">
                            <Link>
                                <img src={upload} />
                            </Link>

                        </div>
                    </div>


                </div>


            </div>




        </>

    );
};
export default Tweet;
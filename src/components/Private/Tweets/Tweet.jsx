import { Link } from 'react-router-dom';
import comment from './../../../icons/comment.svg'
import like from './../../../icons/like.svg'
import rt from './../../../icons/rt.svg'
import upload from './../../../icons/upload.svg'
import Image from './Image'
import Verified from './Verified';
import './../../../CSS/styleFeed.css';

const Tweet = (props) => {
  
    const { username, content, img, name, picture, verified } = props;
    console.log(username," ",name);
    return (

        <div class="row border-bottom">
            <div class="col-md-1 icon-size ">
                <img src="/images/profiles/3.svg" />
            </div>
            <div class="col-md-11">
                <div class="row justify-content-center align-items-center mb-2">
                    <div>
                        <Link>
                            <h2 className="name-prop header">  {name} <Verified verified={verified} />  </h2>

                        </Link>
                        <h2 className="user-prop header">  @{username}</h2>
                    </div>



                </div>
                <div class="row justify-content-start align-items-start mb-2">
                    <h2 className="content-prop">{content}</h2>
                </div>


                <Image route={img} />

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






    );
};
export default Tweet;
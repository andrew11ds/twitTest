import prof from './../../icons/profile.svg'
import './../../CSS/styleFeed.css';

const Tweet = ({ user, content, img, name }) => {
    return (
        <>
            <div class="row border-top ">
                <div class="col icon-size">
                    <img src={prof} />
                </div>
                <div class="col md-10">
                    <div class="row justify-content-start align-items-start">
                        <div class="col">
                            <h2 className="name-prop">{name}</h2>
                        </div>
                        <div class="col">
                            <h2 className="user-prop">{user}</h2>
                        </div>

                    </div>
                    <div class="row justify-content-start align-items-start">
                        <h2 className="content-prop">{content}</h2>
                    </div>
                    <div class="row mb-3">
                        <img src={img} className="img-prop" alt="" />
                    </div>
                    <div class="row mb-3">
                        <div class="col md-3">
                            <img src={prof} />
                        </div>
                        <div class="col md-3">
                            <img src={prof} />
                        </div>
                        <div class="col md-3">
                            <img src={prof} />
                        </div>
                        <div class="col md-3">
                            <img src={prof} />
                        </div>
                    </div>


                </div>


            </div>




        </>

    );
};
export default Tweet;
import './../../../CSS/styleFeed.css';
const Image = ({ route }) => {
    if (route) {
        return (
            <div class="row mb-3">
                <img src={route} className="img-prop" alt="" />
            </div>
        );

    }
    return (
        <>
        </>
    );


};

export default Image;
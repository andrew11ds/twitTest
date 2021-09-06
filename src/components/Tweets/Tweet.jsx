import prof from './../../icons/profile.svg'
const Tweet = ({ user, content, img }) => {
    return (
        <>
            <img src={prof} />
            <h2>{user}</h2>
            <h2>{content}</h2>

        </>

    );
};
export default Tweet;
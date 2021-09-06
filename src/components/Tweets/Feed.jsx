import Tweet from "./Tweet"
const Feed = ({ tweets }) => {
    if (!tweets || tweets.length === 0) {
        return <h2>No tweets found</h2>
    }

    return (
        <div>
            {tweets.map((tweet) => (
                <Tweet
                    user={tweet.user}
                    content={tweet.content}
                    img={tweet.img}
                />

            ))}
        </div>
    );
};

export default Feed;
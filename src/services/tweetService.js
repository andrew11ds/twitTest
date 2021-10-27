import { post, get2,getTweet, deleteTweet, postComment, postLike } from "./http";

const getTweets = async () => {
    const json = await getTweet("tweets");
    return json;
}

const getRealTweets = async () => {
    const json = await get2("tweets");
    console.log(json)
    return json;
}



const createTweets = async (tweet) => {
    const json = await post("tweets", tweet);
    return json;
}

const deleteTweets = async (tweetId) => {
    const json = await deleteTweet("tweets",tweetId);
    return json;
}

const postComments = async (comment, tweetId) => {
    const json = await postComment("tweets/comments",comment,tweetId);
    return json;
}

const postLikes = async (like, tweetId) => {
    const json = await postLike("tweets/likes",like,tweetId);
    return json;
}


export { getTweets, createTweets,getRealTweets, deleteTweets, postComments, postLikes }
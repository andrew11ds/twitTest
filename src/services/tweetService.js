import { post, get2,getTweet } from "./http";

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


export { getTweets, createTweets,getRealTweets }
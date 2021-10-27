import { post, postTweet, getTweet } from "./http";

const loginUser = async (username, password) => {
    const user = {
        username,
        password
    };
    const json = await post("users/login", user);
    return json;
}

const signUpUser = async (username, password, passwordConfirmation, name, email) => {
    const user = {
        username,
        password,
        passwordConfirmation,
        name,
        email
    };
    const json = await post("users", user);
    return json;
}

const createTweetUser = async (content, token) => {
    
    const body ={
        content
    }
    const json = await postTweet("tweets", body, token);
    return json;
}

const getTweets = async (token) => {
    
    
    const json = await getTweet("tweets", token);
    console.log(json);
    return json;
}

export { loginUser, signUpUser, createTweetUser, getTweets }
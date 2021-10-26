import { getTweets, createTweets } from "./../services/tweetService";
import { useEffect, useState } from "react";
import { _TWEETS } from "../lib/constants";
import { useQuery } from "react-query";


export const useTweets = () => {
    
    const query = useQuery(_TWEETS, getTweets);
   // const { data: { isLoading, data, isError } } = query;

   /* const tweets = data;
    console.log(tweets);
*/
    const addTweet = async (tweet) => {
        await createTweets(tweet);
    };

    const removeTweet = (id) => {
        
    };
    
    return {
        query
    }
}
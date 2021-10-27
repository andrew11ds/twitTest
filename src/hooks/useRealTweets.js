import { getRealTweets, createTweets } from "../services/tweetService";
import { useEffect, useState } from "react";
import { _TWEETS } from "../lib/constants";
import { useQuery } from "react-query";


export const useRealTweets = () => {
    
    const query = useQuery("Tweets2", getRealTweets);
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
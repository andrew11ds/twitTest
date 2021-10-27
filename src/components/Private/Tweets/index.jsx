import Tweet from "./Tweet"
import { useTweets } from "./../../../hooks/useTweets";
import { useRealTweets } from "../../../hooks/useRealTweets";
const Feed = () => {
     const info = useTweets();
     const realInfo = useRealTweets();

    
    
   const{query:{data,isLoading}}=info;
   
   
  
   if(info.query.data===undefined || realInfo.query.data===undefined){
       console.log("aca")
    return (<p>loading ...</p> )
   }
  const tweetData=data.data
  const exTweets=realInfo.query.data;
  /* console.log(data);
  console.log(tweetData[0].user)*/
    console.log(realInfo);
    if (isLoading){
        return (<p>loading ...</p> )
    }
        
    const exTweetData=[];
    console.log(exTweets);
    exTweets.map((exTweet)=>{
        exTweetData.push({username:"@DeadByBHVR",name:"Dead by Daylight",content:exTweet.text})
    })
    console.log(exTweetData);
    if (!tweetData || tweetData.length === 0) {
        return <h2>No tweets found</h2>
    }

    

   // return <h2>Passed</h2>

   return (
       <>
        <div>
            {tweetData.map((tweet) => (
                <Tweet
                    user={tweet.user.username}
                    name={tweet.user.name}
                  //  picture={tweet.picture}
                    //verified={tweet.verified}
                    content={tweet.content}
                  //  img={tweet.img}

                />

            ))

      }       
        </div>

        <div>
        {exTweetData.map((tweet) => (
                <Tweet
                    user={tweet.username}
                    name={tweet.name}
                  //  picture={tweet.picture}
                    //verified={tweet.verified}
                    content={tweet.content}
                  //  img={tweet.img}

                />

            ))

      }   

        </div>
        </>


    );
};

export default Feed;



/*
const Tweets = () => {
    const { isLoading, tweets, removeTweet, addTweet } = useTweets();
    if (isLoading)
        return (<p>loading ...</p> )

    return (
        <>
           {
               tweets?.length > 0 ?
               <ul>
                    {
                    tweets.map(tweet => 
                        <Tweet
                            key={tweet._id}
                            tweet={tweet}
                            removeTweet={removeTweet}
                        />)
                    }
                </ul>        
               : 
                <p>no data</p>
           }
        </>
    );
}

export default Tweets;*/
const httpAPI = process.env.REACT_APP_HTTP_API;

const get = async (endpoint) => {
    try{
        const response =  await fetch(`${httpAPI}/${endpoint}`);
        return response.json();
    } catch(err){
        return null;
    }
    
};

const post = async (endpoint, data) => {
    try {
        console.log("POST");
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.json();
    } catch(err){
        return null;
    }
    
}; 

const postTweet = async (endpoint, content, token) => {
    try {
        console.log("POST");
        console.log("Token: ", token);
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(content),
            headers: {
                'x-access-token': token,
                'Content-Type':'application/json'        
            } 
        });
        return response.json();
    } catch(err){
        return null;
    }
    
};

const getTweet = async (endpoint, token) => {
    try {
        console.log("GET");
        console.log("Token: ", token);
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "GET",
            headers: {
                'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTc0NGI1MWRjOTEwNDFhZDAwZTg4MDAiLCJpYXQiOjE2MzUxMjkyNzN9.MEDJ4H-oMvgjQeptd3CT5dhjwC52ajH-zq9WP2WmXlc",
                'Content-Type':'application/json'        
            } 
        });
        // console.log("Tweets ", response.json());
        return response.json();
    } catch(err){
        return null;
    }
    
};

const deleteTweet = async (endpoint, token) => {
    try {
        console.log("DELETE");
        console.log("Token: ", token);
        const response = await fetch(`${httpAPI}/${endpoint}`, {
            method: "GET",
            headers: {
                'x-access-token': token,
                'Content-Type':'application/json'        
            } 
        });
        
        return response.json();
    } catch(err){
        return null;
    }
    
};

export { get, post, postTweet, getTweet, deleteTweet}; 
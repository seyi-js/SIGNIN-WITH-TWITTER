const NodeTwitterAPI = require('node-twitter-api');
const {HANDLE_GET_ACCESS_TOKEN,HANDLE_GET_REQUEST_TOKEN} = require('./libs')

//step 1
//Get your consumer key and secret from your twitter developer acct dashboard
let config;

if(process.env.NODE_ENV !== 'production'){
    config = require('./config')
}else{
    config={
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
    }
};


const Twitter = new NodeTwitterAPI(config);

//Step 2
//Run this function to get your request token and secret
/**
 * @example
 * Request Token: RJocRwAAAAABI4iyAAABfBfVzEI
 * Request Secret: eoyJaSe1zSpH0QJAlq1cEzlDbvDNbAzf
 */
//HANDLE_GET_REQUEST_TOKEN(Twitter);

//step 3
//Append to this URL the request token 
//https://api.twitter.com/oauth/authenticate?oauth_token=request_token

//step 4
//The user will be directed to go back to your app and enter a pin, the pin will be used as the oauth_verifier
//run this function to get the access_token and access_secret by passing the required params
let oauth_verifier =''//The Pin;
let oauth_token =""//request_token
let request_secret="";
//HANDLE_GET_ACCESS_TOKEN(Twitter,request_secret,oauth_verifier,oauth_token);


/**
 * 
 * @param {*} Twitter 
 */

exports.HANDLE_GET_REQUEST_TOKEN =(Twitter) => {
    Twitter.getRequestToken((err,request_token,request_secret)=>{

        if(err){
            throw err;
        }



        console.log('Request Token:',  request_token , '\n\nRequest Secret:', request_secret)
    });
};

//https://api.twitter.com/oauth/authenticate?oauth_token=mzN-6AAAAAAAub8eAAABdgqRe08

/**
 * 
 * @param {*} Twitter 
 * @param {string} request_secret 
 * @param {string} verifier 
 */

exports.HANDLE_GET_ACCESS_TOKEN=(Twitter, request_secret,verifier,request_token)=>{

    Twitter.getAccessToken(request_token, request_secret,verifier,(err,access_token,access_secret)=>{
        if(err){
            throw err;
        };

        Twitter.verifyCredentials(access_token,access_secret,(err,user)=>{
            if(err) throw err;

            console.log('Access Token:',  access_token , '\n\nAccess Secret:', access_secret, '\nUser:', user)
        })

       
    })

};
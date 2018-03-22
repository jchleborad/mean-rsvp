module.exports = {
  AUTH0_DOMAIN: "chleborad.auth0.com", // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: "http://localhost:8083/api", // e.g., 'http://localhost:8083/api/'
  MONGO_URI:
    process.env.MONGO_URI ||
    "mongodb://chleboraddb:AZ32myasu--@ds119449.mlab.com:19449/mean",
  NAMESPACE: "http://myapp.com/roles"
};

/*
===================================
*****Replace mondodb://... with below prior to committing to GitHub*****
*****When running app, replace <dbuser> & <dbpassword> with correct Database User & PW from MongoDB
===================================
*/
// "mongodb://<dbuser>:<dbpassword>@ds119449.mlab.com:19449/mean";




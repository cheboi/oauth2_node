module.exports = {
//   URI: "", // add your mongodb url here
//   SECRET: "", // add secret here. This can be random set of letters
//   GITHUB_CLIENT_ID: "", // add client id here
//   GITHUB_CLIENT_SECRET: "", //add client secret here
//   GITHUB_CALLBACK_URL: "http://localhost:5000/api/auth/github/callback",

  URI: process.env.URI,
  SECRET: process.env.SECRET,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL,

};

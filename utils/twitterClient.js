import { TwitterApi } from "twitter-api-v2";
import { config } from "dotenv";

config();

const client = new TwitterApi({
  apiKey: process.env.Twitter_API_key,
  appSecret: process.env.Twitter_API_Key_Secret,
  accessToken: process.env.Twitter_Access_Token,
  accessSecret: process.env.Twitter_Access_token_secret,
  bearerToken: process.env.Twitter_Bearer_Token,
  clientId: process.env.Twitter_Client_Id,
  clientSecret: process.env.Twitter_Client_Secret,
});

const twitterClient = client.readWrite;
export default twitterClient;

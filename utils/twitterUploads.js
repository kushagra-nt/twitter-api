import twitterClient from "./twitterClient.js";

export async function twitterPostMessage(message) {
  try {
    const response = await twitterClient.v1.tweet(message);
    console.log(response);
  } catch (error) {
    console.log(error.data);
  }
}

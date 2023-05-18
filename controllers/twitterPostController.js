import { twitterPostMessage } from "../utils/twitterUploads.js";

export const postMessage = async (req, res) => {
  const message = req.body.message;
  if (!message) return res.status(400).send({ message: "message is required" });

  await twitterPostMessage(message);
  res.sendStatus(200);
};

export const postPhoto = async (req, res) => {};

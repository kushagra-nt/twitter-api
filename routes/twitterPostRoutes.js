import { Router } from "express";
import { postMessage, postPhoto } from "../controllers/twitterPostController.js";

const router = Router();

router.post("/message", postMessage);

router.post("/photo", postPhoto);

export default router;

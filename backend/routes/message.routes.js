import express from 'express'
import { sendMessage, getMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/:id",protectRoute, getMessage);
router.post("/send/:id",protectRoute,sendMessage)  //route parameter(:id), passed a dynamic value in url(../send/1234anything)

export default router;
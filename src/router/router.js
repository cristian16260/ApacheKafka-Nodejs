import {Router} from "express";
import controllers from "../controller/controller.js";

const router = Router();

router.post("/", controllers.sendMessagekafka)

export default router
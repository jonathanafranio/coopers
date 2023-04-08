import express from "express";
import { getUsers, saveUser } from "../controllers/user.js";

const router = express.Router()

router.get('/', getUsers)

router.post('/', saveUser)


export default router
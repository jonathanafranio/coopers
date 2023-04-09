import express from "express";
import { addList, getList } from "../controllers/list.js";

const router = express.Router()

router.get('/', getList)

router.post('/', addList)



export default router
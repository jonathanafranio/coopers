import express from "express";
import { addList, getList, editItem,removeItem } from "../controllers/list.js";

const router = express.Router()

router.get('/', getList)

router.post('/', addList)

router.put("/:id", editItem)

router.delete("/", removeItem)

export default router
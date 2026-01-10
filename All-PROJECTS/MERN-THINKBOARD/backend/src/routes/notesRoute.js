import express from "express"
import {
  getNote,
  postNote,
  putNote,
  deleteNote,
  getNoteById
} from "../controllers/notesController.js";



const router = express.Router()

router.get("/",getNote)
router.get("/:id",getNoteById)
router.post("/",postNote)
router.put("/:id",putNote)
router.delete("/:id",deleteNote)

export default router


import express from "express"
import {
  getNote,
  postNote,
  putNote,
  deleteNote
} from "../controllers/notesController.js";



const router = express.Router()

router.get("/",getNote)
router.post("/",postNote)
router.put("/:id",putNote)
router.delete("/:id",deleteNote)

export default router

//
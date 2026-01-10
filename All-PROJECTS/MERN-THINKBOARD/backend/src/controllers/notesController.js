import Note from "../models/Note.js"

export async function getNote(req,res){
    try{
        const notes = await Note
    }
}

export const postNote = (req,res) => {
    res.status(201).json({message:"hello this is post"})
}

export const putNote = (req,res) => {
    res.status(200).json({message:"hello this is put"})
}

export const deleteNote = (req,res) => {
    res.status(200).json({message:"hello this is delete"})
}

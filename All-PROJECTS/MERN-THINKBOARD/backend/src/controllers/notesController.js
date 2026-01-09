export const getNote = (req,res) => {
    res.status(200).send("hello i fetch the data")
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

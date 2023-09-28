const Book = require('../models/books');


const index = async(req,res) =>{
        try {
            const books = await Book.find({});
            return res.status(200).json(books)
        } catch (error) {
            return res.status(500).json(error)
        }
}



module.exports ={index}

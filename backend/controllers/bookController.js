const Book = require("../models/books")

const addBook = async (req, res) => {
    const {idBook,nameBook,author,typeBook,shelf,quantity} =req.body;
    try {
        const add = await Book.create({idBook,nameBook,author,typeBook,shelf,quantity})
        console.log(add);
        return res.status(201).json(add)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteBook = async (req,res) => {
    const {idBook} = req.body;
    try {
        const id = await Book.findOneAndDelete({idBook});
        console.log(id);
        return res.status(200).json(id)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const editBook = async (req,res) =>{
    const {idBook,nameBook,author,typeBook,shelf,quantity} = req.body;
    console.log(req.body);
    try {
        const edit =await Book.findOneAndUpdate({idBook}, {nameBook,author,typeBook,shelf,quantity}, {new: true});
        return res.status(200).json(edit)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const findBook = async(req,res) =>{
    let document = [];
    try {
        const {nameBook} = req.body;
        if(nameBook){
            document=await Book.find({"$text": {"$search" : nameBook}});
        }
        else {
            document = await Book.find({});
        }
    } catch (error) {
            return res.status(500).json(error);
    }
}

module.exports = {addBook,deleteBook,editBook,findBook};
const listBorrow = require('../models/listBorrow');
const ListBorrow = require('../models/listBorrow');


const addBorrow = async (req, res) => {
    const { user, books } = req.body;
    try {
        const add = await ListBorrow.findOne({ user });
        if (add) {
            let anotherbooks = add.books.concat(books); // Using the concat() method
            add.books = anotherbooks.slice(); // Assign the values of array1 to array2
        }
        await add.save();
        return res.status(200).json(add);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateBorrow = async (req, res) => {
    const { user, books } = req.body;
    const listBorrowDocument = await ListBorrow.findById(user._id);
    // console.log(listBorrowDocument)
    try {
        const edit = await listBorrow.findOneAndUpdate(
            { user },
            { books },
            { new: true },
        );
        return res.status(200).json(edit);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const deleteBorrow = async (req, res) => {
    const { user, books } = req.body;
    try {
        const add = await ListBorrow.findOne(req.parmas.id);
        console.log(add);
        if (add) {
            const idbok = await listBorrow.findByIdAndDelete({books})
            console.log(idbok);
            return res.status(200).json(idbok);
        } else return res.status(404).json('Không tìm thấy');
    } catch (error) {
        return res.status(500).json(error);
    }
};
module.exports = { addBorrow, updateBorrow, deleteBorrow };

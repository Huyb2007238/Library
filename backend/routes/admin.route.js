
const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");
const borrowController = require("../controllers/borrowController")
const userController = require("../controllers/userController")
const siteController = require('../controllers/siteController');
const listBorrowController  = require('../controllers/listBorrowController');

router.post('/books/edit', bookController.addBook);
router.put('/books/:id/edit', bookController.updateBook);
router.delete('/books/:id',bookController.deleteBook);
router.get('/books/:id/edit',bookController.findBookID);



router.put('/user/:id/edit', userController.editUser);
router.get('/user/:id/edit', userController.findUserID);
router.delete('/user/:id',userController.deleteUser);

router.post('/borrow/:id/edit', borrowController.editBorrow);
router.get('/borrow/:id/edit', borrowController.displayBorrowInfo);
router.post('/borrow/edit', borrowController.addBorrow);
// router.get('borrow',borrowController.)
// router.post('/listBr/edit',listBorrowController.addListBorrow);

// router.post("/books/store", bookController.store);
router.post('/borrows',listBorrowController.addBorrow)
router.put('/borrows/:id',listBorrowController.updateBorrow)
router.delete('/borrows',listBorrowController.deleteBorrow)

router.get('/books', siteController.index_Book);
router.get('/users', siteController.index_User);
router.get('/borrow', siteController.index_Borrow);
router.get('/listBorrow',siteController.index_ListBorrow);


module.exports = router;

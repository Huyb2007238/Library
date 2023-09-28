
const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");
const userController = require("../controllers/userController");


// router.post("/store", bookController.store);

// router.get('/:id/edit', bookController.edit);

// router.get('/:id', bookController.get);

router.delete('/:id/delete', userController.deleteUser);

router.post('/user/create',userController.addUser);

router.put('/:id/edit', userController.editUser);

//Book
router.get('/',bookController.findBook)

router.delete('/', bookController.deleteBook);

router.post('/',bookController.addBook);

router.put('/:id',bookController.editBook);

module.exports = router;

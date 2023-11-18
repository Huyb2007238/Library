
const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");
const borrowController = require('../controllers/borrowController');
const userController = require('../controllers/userController')

router.post("/login", authController.loginUser);

router.post("/register", authController.registerUser);

router.put('/:id/edit', userController.editUserpassword);

router.post('/books/borrow', borrowController.addBorrow);
router.get('/', bookController.findAllBook);

router.get('/books/:id', bookController.findBookID);
router.get('/search/query', bookController.search)

// router.get('/:id',userController.findUser)




module.exports = router;

// router.post("/logout",middlewareController.verifyToken,authController.loginUser);


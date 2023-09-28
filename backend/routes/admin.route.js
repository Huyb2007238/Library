
const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController");
const adminController = require("../controllers/adminController");

router.get('/stored/bookss', adminController.storedPets);

router.get('/books/:id/edit', bookController.edit);

router.post("/books/store", bookController.store);

module.exports = router;

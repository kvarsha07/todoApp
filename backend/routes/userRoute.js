const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');



// Create a user
router.post('/create', userController.createUser);

// Get all users
router.get('/getall', userController.getAllData);

// Get one user by ID
router.get('/:id', userController.getOneData);

// Update a user by ID
router.put('/update/:id', userController.updateUser);

// // Delete a user by ID
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;

const express = require('express');

const router = express.Router();

// const adminController = require('../controllers/admin');
const userController = require('../controllers/users');
// const errorController = require('../controllers/errors');

router.get('/user-list', userController.getUsers);

router.get('/users/user/:userId', userController.getUser);

router.get('/', userController.getIndex);

// router.get('/add-user', adminController.getAddUserPage);

// router.use('/', errorController.get404);

module.exports = router;


// const path = require('path');
// res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
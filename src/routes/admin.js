const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/user-list', adminController.getUsers);

router.post('/add-user', adminController.addUser);

router.get('/add-user', adminController.getAddUserPage);

module.exports = router;
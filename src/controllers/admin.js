const User = require('../models/user');

exports.getUsers = (req, res, next) => {
    User.fetchAll(users => {
        res.render('admin/user-list', {
            users: users,
            pageTitle: 'User List',
            path:'/admin/user-list'
        });
    })  
};

exports.addUser = (req, res, next) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const password = req.body.password;
    // console.log('[ADMIN]',username, useremail, password);
    const user = new User(username, useremail, password);
    // const user = new User(req.body.fname);
    user.save();
    res.redirect('/admin/user-list');
};

exports.getAddUserPage = (req, res, next) => { 
    res.render('admin/add-user',{
        pageTitle: 'Add User',
        path:'/admin/add-user'
    });
};


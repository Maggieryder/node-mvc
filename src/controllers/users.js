const User = require('../models/user');

exports.getUsers = (req, res, next) => {
  User.fetchAll(users => {
    res.render('user-list', {
      users: users,
      pageTitle: 'User List',
      path: '/user-list'
    });
  });
};

exports.getUser = (req, res, next) => {
    const id = req.params.userId;
    User.getUserById(id, user => {
        console.log('[USERS] user', user);
        res.render('users/user', {
            user: user, 
            pageTitle: user.username,
            path: '/user-list'
        })
    }) 
  };

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home',
        path: '/'
    });
};

// exports.getCart = (req, res, next) => {
//   res.render('shop/cart', {
//     path: '/cart',
//     pageTitle: 'Your Cart'
//   });
// };

// exports.getOrders = (req, res, next) => {
//   res.render('shop/orders', {
//     path: '/orders',
//     pageTitle: 'Your Orders'
//   });
// };

// exports.getCheckout = (req, res, next) => {
//   res.render('shop/checkout', {
//     path: '/checkout',
//     pageTitle: 'Checkout'
//   });
// };

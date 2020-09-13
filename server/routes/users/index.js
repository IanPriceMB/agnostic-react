const express = require('express');
const router = express.Router();
const { users: basicUsers, admins, superAdmins } = require('./users');

router.get('/', (req, res, next) => {
  
  // Return users based on user credetials
  // normally this would be handeled by a db and in a more secure manner
  const { type = 'user' } = req.query;
  let users = [];
  switch (type) {
    case 'user':
      users = [...basicUsers];
      break;
    case 'admin':
      users = [...basicUsers, ...admins];
      break;
    case 'superAdmin':
      users = [...basicUsers, ...admins, ...superAdmins];
      break;
    default:
      users = [...basicUsers];
      break;
  };

  res.send({
    count: users.length,
    users,
  });
  
});

module.exports = router;
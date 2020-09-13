const express = require('express');
const router = express.Router();
const { users: basicUsers, admins, superAdmins } = require('./users');

router.get('/', (req, res, next) => {
  
  // Return users based on user credetials
  // normally this would be handeled by a db and in a more secure manner
  const { type = 'users' } = req.query;
  let users = [];
  switch (type) {
    case 'users':
      users = [...basicUsers];
      break;
    case 'admins':
      users = [...admins];
      break;
    case 'super-admins':
      users = [...superAdmins];
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

router.post('/', (req, res, next) => {
  const { access } = req.query;
  const { userName, userType } = req.body;
  const userId = [...basicUsers, ...admins, ...superAdmins].length + 1;

  if (!userId || !userName || !userType) {
    res.status(500).send({ error: 'Missing properties.'});
    return;
  } else if (access === 'users' && userType !== 'user') {
    res.status(500).send({ error: 'Not authorized to create this type of user.'});
    return;
  } else if (access === 'admins' && userType === 'superAdmin') {
    res.status(500).send({ error: 'Not authorized to create this type of user.'});
    return;
  } else {
    switch (userType) {
      case 'user':
       basicUsers.push({ userId, userName, userType });
        break;
      case 'admin':
       admins.push({ userId, userName, userType });
        break;
      case 'superAdmin':
       superAdmins.push({ userId, userName, userType });
        break;
      default:
        break;
    };
    
    res.send({ success: true });
  }

})

module.exports = router;
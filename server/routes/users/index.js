const express = require('express');
const router = express.Router();
const basicUsers = require('./users');

router.get('/', (req, res, next) => {
  const { type } = req.query;
  let users = [];
  switch (type) {
    case 'users':
      users = basicUsers.filter(ele => ele.userType === 'user').filter(ele => !ele.deleted);
      break;
    case 'admins':
      users = basicUsers.filter(ele => ele.userType === 'admin').filter(ele => !ele.deleted);
      break;
    case 'super-admins':
      users = basicUsers.filter(ele => ele.userType === 'superAdmin').filter(ele => !ele.deleted);
      break;
    default:
      users = basicUsers.filter(ele => ele.userType === 'user').filter(ele => !ele.deleted);
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
  const userId = basicUsers.length + 1;

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
    basicUsers.push({ userId, userName, userType });    
    res.send({ success: true });
  };

});

router.put('/:userId', (req, res, next) => {
  const { access } = req.query;
  const { userName, userType } = req.body;
  const { userId } = req.params;

  if (!userId || !access) {
    res.status(500).send({ error: 'Missing id or validation.'});
    return;
  } else if (!userName && !userType) {
    res.status(500).send({ error: 'No update given.'});
    return;
  }

  const user = basicUsers.filter(ele => ele.userId === parseInt(userId))[0];
  
  if (!user) {
    res.status(500).send({ error: 'No user found for that id.'});
    return;
  } else if (access === 'user' && user.userType !== 'user') {
    res.status(500).send({ error: 'Not authorized to update this type of user.'});
    return;
  } else if (access === 'admin' && user.userType === 'superAdmin') {
    res.status(500).send({ error: 'Not authorized to update this type of user.'});
    return;
  } else {
    basicUsers.splice(user.userId - 1, 1, { ...user, userName, userType });
    res.send({ success: true });
  };

});

router.delete('/:userId', (req, res, next) => {
  const { access } = req.query;
  const { userId } = req.params;

  if (!userId || !access) {
    res.status(500).send({ error: 'Missing id or validation.'});
    return;
  };

  const user = basicUsers.filter(ele => ele.userId === parseInt(userId))[0];
  
  if (!user) {
    res.status(500).send({ error: 'No user found for that id.'});
    return;
  } else if (access === 'user' && user.userType !== 'user') {
    res.status(500).send({ error: 'Not authorized to delete this type of user.'});
    return;
  } else if (access === 'admin' && user.userType === 'superAdmin') {
    res.status(500).send({ error: 'Not authorized to delete this type of user.'});
    return;
  } else {
    basicUsers.splice(user.userId - 1, 1, { ...user, deleted: true });
    res.send({ success: true });
  };

});

module.exports = router;
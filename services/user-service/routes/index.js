var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userCtrl');

router.get('/', userCtrl.getUser);
router.post('/create', userCtrl.createUser);
router.delete('/delete', userCtrl.deleteUser);
router.put('/update', userCtrl.updateUser);
router.get('/all', userCtrl.getAllUsers);
router.post('/login', userCtrl.login);

module.exports = router;
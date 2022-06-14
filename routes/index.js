var express = require('express');
var router = express.Router();
var userRoutes = require('../services/user-service/routes/index');
var postRoutes = require('../services/post-service/routes/index');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
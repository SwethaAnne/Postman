var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/postCtrl');

router.get('/', postCtrl.getPost);
router.post('/create', postCtrl.createPost);
router.delete('/delete', postCtrl.deletePost);
router.get('/all', postCtrl.getAllPosts);
router.put('/update', postCtrl.updatePost);

module.exports = router;
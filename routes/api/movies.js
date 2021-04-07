const router = require('express').Router();
const moviesCtrl = require('../../controllers/movies');

router.get('/', moviesCtrl.index);

module.exports = router;
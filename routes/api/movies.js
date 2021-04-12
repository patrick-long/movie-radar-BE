const router = require('express').Router();
const moviesCtrl = require('../../controllers/movies');

router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);

module.exports = router;
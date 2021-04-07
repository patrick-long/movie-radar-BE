const router = require('express').Router();
const moviesCtrl = require('../../controllers/movies');

router.get('/popular', moviesCtrl.popular);
router.get('/upcoming', moviesCtrl.upcoming);
router.get('/search', moviesCtrl.search);
router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);

module.exports = router;
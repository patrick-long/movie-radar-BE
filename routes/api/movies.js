const router = require('express').Router();
const moviesCtrl = require('../../controllers/movies');

router.get('/popular1', moviesCtrl.popular1);
router.get('/popular2', moviesCtrl.popular2);
router.get('/popular3', moviesCtrl.popular3);
router.get('/popular4', moviesCtrl.popular4);
router.get('/popular5', moviesCtrl.popular5);
// router.get('/upcoming', moviesCtrl.upcoming);
// router.get('/:id', moviesCtrl.show);
router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);

module.exports = router;
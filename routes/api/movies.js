const router = require('express').Router();
const moviesCtrl = require('../../controllers/movies');

router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);
router.get('/genres', moviesCtrl.genresIndex);
router.post('/genres', moviesCtrl.genresCreate);

module.exports = router;
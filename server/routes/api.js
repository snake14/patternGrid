const express = require('express');
const router = express.Router();
const store = require('../../store');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET pattern grid listing. */
router.get('/savedpatterns', (req, res) => {
	store.getGrids()
	.then(function(data) {
    	res.send(data);
    });
});

/* GET pattern grid by ID. */
router.get('/savedpattern/:patternId', (req, res) => {
	store.getGrid(req.params.patternId)
	.then(function(data) {
    	res.send(data);
    });
});

/* POST a new pattern grid. */
router.post('/gridpattern', (req, res) => {
	store
		.createGrid({
			grid: req.body.grid,
			recent_colors: req.body.recent_colors,
			cell_size: req.body.cell_size,
			grid_width: req.body.grid_width,
			grid_height: req.body.grid_height
	    })
	    .then(() => res.sendStatus(200))
})

module.exports = router;
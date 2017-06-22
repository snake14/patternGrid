const knex = require('knex')(require('./knexfile'))
module.exports = {
  createGrid ({ grid, recent_colors, cell_size, grid_width, grid_height }) {
    console.log(`Add grid with cell size ${cell_size}, width ${grid_width}, and height ${grid_height}`)
    return knex('pattern_grid').insert({
    	grid, 
    	recent_colors, 
    	cell_size, 
    	grid_width, 
    	grid_height
    })
  },
  
  getGrid (id) {
	  console.log(`Get grid ${id}`)
	  return knex('pattern_grid').where('id', id).then(function(data) {
		  return data;
	  });
  },
  
  getGrids () {
	  console.log(`Get all grids`);
	  return knex('pattern_grid').then(function(data) {
		  return data;
	  });
  }
}

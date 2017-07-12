const knex = require('knex')(require('./knexfile'))
module.exports = {
  createGrid ({ name, grid, recent_colors, cell_size, grid_width, grid_height }) {
    console.log(`Add grid with name ${name}, cell size ${cell_size}, width ${grid_width}, and height ${grid_height}`);
    return knex('pattern_grid').insert({
    	name,
    	grid, 
    	recent_colors, 
    	cell_size, 
    	grid_width, 
    	grid_height
    });
  },
  
  updateGrid ({ id, name, grid, recent_colors, cell_size, grid_width, grid_height }) {
	  console.log(`Update grid ${id} with name ${name}, cell size ${cell_size}, width ${grid_width}, and height ${grid_height}`);
	  return knex('pattern_grid').where('id', id).update({
		  id,
		  name,
		  grid, 
		  recent_colors, 
		  cell_size, 
		  grid_width, 
		  grid_height
	   });
  },
	  
  deleteGrid (id) {
	  console.log(`Delete grid ${id}`);
	  return knex('pattern_grid').where('id', id).del();
  },
  
  getGrid (id) {
	  console.log(`Get grid ${id}`);
	  return knex('pattern_grid').where('id', id).first().then(function(data) {
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

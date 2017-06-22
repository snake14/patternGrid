exports.up = function(knex, Promise) {
	return knex.schema.createTable('pattern_grid', function(t) {
		t.increments('id').primary()
		t.string('grid').notNullable()
		t.string('recent_colors')
		t.string('cell_size').notNullable()
		t.string('grid_width').notNullable()
		t.string('grid_height').notNullable()
		t.timestamps(false, true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('pattern_grid')
};

exports.up = function(knex, Promise) {
	return knex.schema.createTable('pattern_grid', function(t) {
		t.increments('id').primary()
		t.string('name').notNullable()
		t.text('grid').notNullable()
		t.text('recent_colors')
		t.string('cell_size').notNullable()
		t.string('grid_width').notNullable()
		t.string('grid_height').notNullable()
		t.timestamps(false, true)
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('pattern_grid')
};


exports.up = function(knex) {
    return knex.schema.alterTable('user', function(table) {
        table.string('firstname');
        table.string('lastname');
    });
};

exports.down = function(knex) {
    return knex.schema.table('user', function(table) {
        table.dropColumn('firstName');
        table.dropColumn('lastName');
    });
};

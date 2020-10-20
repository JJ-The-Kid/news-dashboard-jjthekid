const knex = require('knex')(require('../knexfile')),
    USER_FIELDS = ['id', 'username', 'firstname', 'lastname'];

const insert = user =>
    knex
        .insert(user)
        .into('user')
        .returning('id')
        .then(idArray => ({
            insertId: idArray[0]
        }));

const getOneByUsername = username =>
    knex('user')
        .first(...USER_FIELDS, 'password')
        .where('username', username);

const getByUsername = username =>
    knex('user')
        .select(...USER_FIELDS)
        .where('username', username);

const getById = id =>
    knex('user')
        .first(...USER_FIELDS)
        .where({ id });

const getAll = () => knex.select(...USER_FIELDS).from('user');

const deleteById = id => knex('user').del().where({ id });

const update = (id, values) => {
    console.log(values);
    return knex('user').update(values).where({ id });
};

const usernameOccupied = async (id, username) => {
    return (
        (
            await knex('user')
                .where('username', username)
                .andWhereNot('id', id)
                .select('id')
        ).length >= 1
    );
};

module.exports = {
    insert,
    getOneByUsername,
    getByUsername,
    getById,
    getAll,
    deleteById,
    update,
    usernameOccupied
};

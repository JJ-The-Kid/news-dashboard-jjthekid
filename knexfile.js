if (process.env.DATABASE_URL) {
    // running on Heroku using Postgres
    module.exports = {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        searchPath: ['knex', 'public'],
        pool: { min: 1, max: 100 }
    };
} else {
    // running locally using MySQL
    require('dotenv').config();
    module.exports = {
        client: 'mysql',
        connection: {
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        },
        pool: { min: 1, max: 100 }
    };
}

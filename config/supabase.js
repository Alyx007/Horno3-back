// Author: Aleksandra Stupiec 

const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    ssl: {
        rejectUnauthorized: false
    },
    family: 4
});

const querypromise = (sql) => {
    return new Promise( (resolve, reject) => {
        pool.query(sql, (error, results) =>{
            if (error){
                return reject(error)
            }
            return resolve(results.rows)
        })
    })
}

module.exports = {
    pool,
    querypromise
}
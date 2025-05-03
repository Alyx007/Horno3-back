const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config()

// const dbUrl = process.env.DATABASE_URL;
// const password = dbUrl.split(':')[2].split('@')[0]; // Extract password
// console.log('Password type:', typeof password); // Must output "string"

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
// async function testSupabaseConnection() {
//     try {
//         // testing query
//         const { data, error } = await pool
//             .from('activities') 
//             .select('*')
//             .limit(1);

//         if (error) throw error;
        
//         console.log('✅ Connection successful!');
//         console.log('Server version:', data[0]?.backend_start || 'Connected');
//     } catch (error) {
//         console.error('❌ Connection failed:', error.message);
//         process.exit(1); // Exit if fails 
//     }
// }

// const querypromise = (sql) => {
//     return new Promise( (resolve, reject) => {
//         pool.query(sql, (error, results) =>{
//             if (error){
//                 return reject(error)
//             }
//             return resolve(results.rows)
//         })
//     })
// }

// testSupabaseConnection();


// module.exports = {
//     pool,
//     querypromise
// }
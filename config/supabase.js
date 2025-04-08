const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

dotenv.config()

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

console.log('Connected to:', process.env.SUPABASE_URL);

async function testSupabaseConnection() {
    try {
        // testing query
        const { data, error } = await supabase
            .from('activities') 
            .select('*')
            .limit(1);

        if (error) throw error;
        
        console.log('✅ Connection successful!');
        console.log('Server version:', data[0]?.backend_start || 'Connected');
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        process.exit(1); // Exit if fails 
    }
}

const querypromise = (sql) => {
    return new Promise( (resolve, reject) => {
        supabase.query(sql, (error, results) =>{
            if (error){
                return reject(error)
            }
            return resolve(results.rows)
        })
    })
}

testSupabaseConnection();


module.exports = {
    supabase,
    querypromise
}
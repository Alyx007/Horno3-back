const dbService = require('../config/supabase.js')

module.exports = {
    getAllActivity : async () => {
        try {
            const result = await pool.query('SELECT * FROM activities');
            return result.rows;
    } catch (err) {
        throw err;
    }
}
};
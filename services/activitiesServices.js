const dbService = require('../config/supabase.js')

module.exports = {
    getAllActivity : async () => {
        try {
            sql = 'SELECT * FROM activities';
            return dbService.querypromise(sql);
    } catch (err) {
        throw err;
    }
}
};
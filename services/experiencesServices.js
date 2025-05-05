const dbService = require('../config/supabase.js')

module.exports = {
    getAllExperiences : async () => {
        try {
            sql = 'SELECT * FROM experience';
            return dbService.querypromise(sql);
        } catch (err) {
            throw err;
        }
    }
};
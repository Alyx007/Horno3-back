const dbService = require('../config/supabase.js')

module.exports = {
    getAllExperiences : () => {
        sql = 'SELECT * FROM experience'
        return dbService.querypromise(sql)
    }
}
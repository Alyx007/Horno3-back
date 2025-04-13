const dbService = require('../config/supabase.js')

module.exports = {
    getAllActivities : () => {
        sql = 'SELECT * FROM activities'
        return dbService.querypromise(sql)
    }
}
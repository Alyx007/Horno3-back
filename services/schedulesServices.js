const dbService = require('../config/supabase.js')

module.exports = {
    getAllSchedules : () => {
        sql = 'SELECT * FROM schedule'
        return dbService.querypromise(sql)
    }
}
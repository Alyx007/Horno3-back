const dbService = require('../config/supabase.js')

module.exports = {
    getAllASchedules : () => {
        sql = 'SELECT * FROM schedule'
        return dbService.querypromise(sql)
    }
}
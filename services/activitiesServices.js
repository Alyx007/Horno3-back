const dbService = require('../config/supabase.js')

module.exports = {
    getAllActivity : () => {
        sql = 'SELECT * FROM activities'
        return dbService.querypromise(sql)
    }
}
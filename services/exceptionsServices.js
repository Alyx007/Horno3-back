const dbService = require('../config/supabase.js')

module.exports = {
    getAllExceptions : () => {
        sql = 'SELECT * FROM exception'
        return dbService.querypromise(sql)
    }
}
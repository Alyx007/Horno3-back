const dbService = require('../config/supabase.js')

module.exports = {
    getAllNews : () => {
        sql = 'SELECT * FROM new'
        return dbService.querypromise(sql)
    }
}
const ActivityServices = require('../services/activitiesServices.js')

module.exports = {
    getAllActivity : async (req, res, next) => {
        try {
            const activity  = await ActivityServices.getAllActivity();
            return res.json({activity})
        } catch (err){
            console.error('Error fetching activities:', err);
            res.status(500).json({ message: 'Error fetching activities', error: err.message });
        }
        
    }
}

console.log(ActivityServices);
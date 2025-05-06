const SchedulesServices = require('../services/schedulesServices.js')

module.exports = {
    getAllSchedules : async (req, res, next) => {
        try {
            const schedules  = await SchedulesServices.getAllSchedules();
            return res.json({schedules})
        } catch (err){
            console.error('Error fetching schedules:', err);
            res.status(500).json({ message: 'Error fetching schedules', error: err.message });
        }
        
    }
}

console.log(SchedulesServices);
const ExperienceServices = require('../services/experiencesServices.js')

module.exports = {
    getAllExperience : async (req, res, next) => {
        try {
            const experience  = await ExperienceServices.getAllExperience();
            return res.json({experience})
        } catch (err){
            console.error('Error fetching experiences:', err);
            res.status(500).json({ message: 'Error fetching experiences', error: err.message });
        }
        
    }
}

console.log(ExperienceServices);
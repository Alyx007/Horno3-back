const ExperiencesServices = require('../services/experiencesServices.js')

module.exports = {
    getAllExperiences : async (req, res, next) => {
        try {
            const experiences  = await ExperiencesServices.getAllExperiences();
            return res.json({experiences})
        } catch (err){
            console.error('Error fetching experiences:', err);
            res.status(500).json({ message: 'Error fetching experiences', error: err.message });
        }
        
    }
}

console.log(ExperiencesServices);
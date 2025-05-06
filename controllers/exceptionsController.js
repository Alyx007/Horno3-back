const ExceptionsServices = require('../services/exceptionsServices.js')

module.exports = {
    getAllExceptions : async (req, res, next) => {
        try {
            const exceptions  = await ExceptionServices.getAllExceptions();
            return res.json({exceptions})
        } catch (err){
            console.error('Error fetching exceptions:', err);
            res.status(500).json({ message: 'Error fetching exceptions', error: err.message });
        }
        
    }
}

console.log(ExceptionsServices);
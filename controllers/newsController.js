const NewsServices = require('../services/newsServices.js')

module.exports = {
    getAllNews : async (req, res, next) => {
        try {
            const news  = await NewsServices.getAllNews();
            return res.json({news})
        } catch (err){
            console.error('Error fetching news:', err);
            res.status(500).json({ message: 'Error fetching news', error: err.message });
        }
        
    }
}

console.log(NewsServices);
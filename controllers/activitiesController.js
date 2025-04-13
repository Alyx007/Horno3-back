const ActivityServices = require('../services/activitiesServices.js')

module.exports = {
    getAllActvity : async (req, res, next) => {
        try {
            const activity  = await ActivityServices.getAllActvity();
            return res.json({activity})
        } catch (err){
            return res.json({"message": `Erro al obtener todas las actividades. Err: ${err}`})
        }
        
    },
    getActvity : async (req, res) => {
        
        const id = req.params.id
        
        if (!Number.isInteger(id)){
            return res.json({"message": "El Id necesita ser entero"})
        }
        try {
            const activity = await ActivityServices.getActvity(id);
            return res.json({activity})

        } catch (err){
            return res.json({"message": `Erro al obtener las actividades by Id. Err: ${err}`})
        }

    },
    addActvity : async (req, res) => {

        try {
            const activity = await ActivityServices.addActvity(req.body);
            res.status(200).json({activity})

        } catch (err){
            res.status(500).json({"message": `Erro al obtener las actividades. Err: ${err}`})
        }

    },
    updateActivity : async (req, res) => {
        const id = req.params.id
        if (!Number.isInteger(id)){
            return res.status(500).json({"message": "El Id necesita ser entero"})
        }
        try {
            const activity = await ActivityServices.updateActivity(id,req.body);
            return res.status(200).json({activity})

        } catch (err){
            return res.status(500).json({"message": `Erro al obtener las actividades. Err: ${err}`})
        }

    }
}
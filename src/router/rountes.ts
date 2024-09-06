import express from 'express';

const routes = express.Router()

routes.get('/', (req, res)=>{
    return res.json({
        message: "Route working..."
    })
})

export default routes;
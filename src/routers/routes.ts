import Home from '@/views';
import express from 'express';

const routes = express.Router()

routes.get('/', (req, res)=>{
    return res.send(Home())
})

export default routes;
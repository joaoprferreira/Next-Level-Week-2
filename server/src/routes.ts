import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async (request, response) => { 
    const {
        name, 
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

      await db('users').insert({
          name,
          avatar,
          bio,
         whatsapp,
      });
  

    return response.send();
});

export default routes;
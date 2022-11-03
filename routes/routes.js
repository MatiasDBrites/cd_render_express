import express from "express";

// Import School Controller
import { //importramos todos los Controller que tenemos 
    getGuilds,
    getGuildById,
    createGuild,
    updateGuild,
    deleteGuild
} from "../controllers/guilds.js";

import { isUserAuthenticated } from "../middlewares/auth.js";

const Router = express.Router();

 // Route get all guilds
Router.get('/guild', [isUserAuthenticated], getGuilds); //valida si esta logueado o nop para entrar. (se usa [] si hay varios middleware)
// Route get guild by id
Router.get('/guild/:id', isUserAuthenticated, getGuildById);
// Route create a new guild
Router.post('/guild', isUserAuthenticated, createGuild);
// Route update guild by id
Router.put('/guild/:id', isUserAuthenticated, updateGuild);
// Route delete guild by id
Router.delete('/guild/:id', isUserAuthenticated, deleteGuild);

// export router
export default Router;

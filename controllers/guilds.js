// Import School Model
import Guild from "../models/guild.js";

// get que me traiga todos los guilds
export const getGuilds = async (req, res) => {
    try {
        const guild = await Guild.findAll();
        res.send(guild);
    } catch (err) {
        console.log(err);
    }
}

//get guild por Id:

export const getGuildById = async (req, res) => {
    try {
        const guild = await Guild.findByPk(req.params.id);
        if (!guild) {
            res.status(404).send({
                message: `No guild found with id ${req.params.id}`
            });
        }
        res.send(guild);
    } catch (err) {
        console.log(err);
    }
}

//crear un nuevo guild
export const createGuild = async (req, res) => {
    try {
        await Guild.create(req.body); //usamos el modelo y le pasamos el modelo que seria un json
        res.json({
            "message": "Guild Created",
        });
    } catch (err) {
        console.log(err);
    }
}

//modificar/actualizar un guild por id
export const updateGuild = async (req, res) => {
    try {
        const guild = await Guild.findByPk(req.params.id); //donde le llega por parametro 
        if (!guild) {
            res.status(404).send({
                message: `No Guild found with id ${req.params.id}`
            });
            return;
        }
        await Guild.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Guild Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

//borrar por id:
export const deleteGuild = async (req, res) => {
    try {
        const guild = await Guild.findByPk(req.params.id);
        if (!guild) {
            res.status(404).send({
                message: `No Guild found with id ${req.params.id}`
            });
            return;
        }
        await Guild.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Guild Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
// mongdb schemas
const Build = require('../schema/Builds');
const Farm = require('../schema/Farms');
const Channel = require('../schema/Channels');

// rotas das builds
const addBuild = async (req, res) => {
    // salva os dados no mongo com valor verificado
    let build = new Build(req.body)

    try {
        await build.save()
        return res.status(201).send()
    } catch (error) {
        res.send(error);
    }
}

const getBuilds = async (req, res) => {
    try {
        let builds = await Build.find({})
        res.send(builds)
    } catch (error) {
        res.send(error);
    }
}

const deleteBuild = async (req, res) => {

    let id = req.params.videoId;

    try {
        res.send(await Build.deleteOne({videoId: id}))
    } catch (error) {
        res.send(error);
    }
}


// rotas das farms
const addFarm = async (req, res) => {
    // salva os dados no mongo com valor verificado
    let farm = new Farm(req.body)

    try {
        await farm.save()
        return res.status(201).send()
    } catch (error) {
        res.send(error);
    }
}

const getFarms = async (req, res) => {
    try {
        let farms = await Farm.find({})
        res.send(farms)
    } catch (error) {
        res.send(error);
    }
}

const deleteFarm = async (req, res) => {

    let id = req.params.videoId;

    try {
        res.send(await Farm.deleteOne({videoId: id}))
    } catch (error) {
        res.send(error);
    }
}


// rotas dos channels
const addChannel = async (req, res) => {
    // salva os dados no mongo com valor verificado
    let channel = new Channel(req.body)

    try {
        await channel.save()
        return res.status(201).send()
    } catch (error) {
        res.send(error);
    }
}

const getChannels = async (req, res) => {
    try {
        let channels = await Channel.find({})
        res.send(channels)
    } catch (error) {
        res.send(error);
    }
}

const deleteChannel = async (req, res) => {

    let id = req.params.channelId;

    try {
        res.send(await Channel.deleteOne({channelId: id}))
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    addBuild, getBuilds, deleteBuild, addFarm, getFarms, deleteFarm, addChannel, getChannels, deleteChannel
};


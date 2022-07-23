const express = require('express');
const router = express.Router();

const linkControler = require('../controlers/linkControler')

// rotas do minebuilds

// essa rota pega todos as build
router.get('/api/getbuilds', linkControler.getBuilds)
// essa rota add todas as builds
router.post('/api/addbuild', linkControler.addBuild)
// essa rota deleta uma build
router.delete('/api/deletebuild/:videoId', linkControler.deleteBuild)

// rotas do minefarms

// essa rota pega todos as farms
router.get('/api/getfarms', linkControler.getFarms)
// essa rota add todas as farms
router.post('/api/addfarm', linkControler.addFarm)
// essa rota deleta uma farm
router.delete('/api/deletefarm/:videoId', linkControler.deleteFarm)

// rotas do channels

// essa rota pega todos os channels
router.get('/api/getchannels', linkControler.getChannels)
// essa rota add todas os channels
router.post('/api/addchannel', linkControler.addChannel)
// essa rota deleta um channel
router.delete('/api/deletechannel/:channelId', linkControler.deleteChannel)

module.exports = router;
const mongoose = require('mongoose');

const channelLinkSchema = mongoose.Schema({
    channelId: {type: String, required: true, minlenght: 5, maxlength: 100}
})

module.exports = mongoose.model('Channel', channelLinkSchema);
const mongoose = require('mongoose');

const buildLinkSchema = mongoose.Schema({
    videoId: { type: String, required: true, minlength: 5, maxlength: 200 }
})

module.exports = mongoose.model('Build', buildLinkSchema);
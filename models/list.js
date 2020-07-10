
const Mongoose = require('../connect')

const ListSchema = new Mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    value:{
        type: String,
        required: true
    },
    finished:{
        type: Boolean,
        required: true
    }
});

const ListItem = Mongoose.model('ListItem', ListSchema);

module.exports = ListItem;
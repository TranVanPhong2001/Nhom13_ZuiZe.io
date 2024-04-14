const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const Hang= new Schema(
    { 
        TenH: { type: String, maxLength: 20 },
        
    }
    
);

Hang.plugin(mongoosePaginate);
module.exports = mongoose.model('Hang', Hang,"Hang");
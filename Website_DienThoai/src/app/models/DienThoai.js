const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const DienThoai= new Schema(
    { 
        name: { type: String, maxLength: 20 },
        loai: { type: String, maxLength: 20 },
        mota: { type: String, maxLength: 200 },
        img: { type: String, maxLength: 250 },
        gia: { type: String, maxLength: 20 },
        gia2: { type: String, maxLength: 20 },
    }
);
DienThoai.plugin(mongoosePaginate);

module.exports = mongoose.model('DienThoai', DienThoai,"DienThoai");
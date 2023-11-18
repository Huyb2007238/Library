const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ListBorrow = new mongoose.Schema({
    user:{
        code :{type:String, required:true},
        fullname:{type:String, required:true}
    },
    books: [
        {
            id: {type: String, required:true},
            dateBorrow: { type: Date, default: Date.now() },
            dateDue: { type: Date},
            dateReturn: { type: Date },
            state: { type: Boolean, default : false},
        },
    ],
},{collection: 'ListBorrow'})

ListBorrow.plugin(mongooseDelete,{
    deletedAt: true,
    overrideMethods:true
})


module.exports = mongoose.model('ListBorrow',ListBorrow);

import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const borrowSchema = new mongoose.Schema({
    idborrow: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    idbook: {type: String, required: true, unique: true},
    dateborrow: {type: Date, required: true},
    datedue: {type: Date, required: true},
    datereturn:{type: Date, required: true},
    trangthai:{type:String, require:  true}
});

borrowSchema.plugin(mongooseDelete,{
    deletedAt: true,
    overrideMethods:true
})

const Borrow = mongoose.model('Borrow',borrowSchema);
export default Borrow;
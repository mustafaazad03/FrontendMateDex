import mongoose from 'mongoose';

const orbSchema = new mongoose.Schema({
    orbAddress:{
        type:String,
        required:true,
    },
    time: {
        type:Date,
        required:true,
    },
    bidPrice:{
        type:Number,
        required:true
    },
    currentHolder: {
        type:String,
        required:true,
    },
    address_0: {
        type:String,
        required:true
    }
})

const orbData = mongoose.model("orb",orbSchema);

export default orbData;
import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    }
})

export default mongoose.model('Videos', Schema)


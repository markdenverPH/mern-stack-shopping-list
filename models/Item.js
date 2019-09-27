import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    date: {
        type: Date,
        default: Date.now // auto fill
    }
});

const Item = mongoose.model('item', ItemSchema);
export default Item;
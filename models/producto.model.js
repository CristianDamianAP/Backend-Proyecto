import mongoose, {Schema} from "mongoose";

const Productos  = new Schema({
    title : String,
    price : Number ,
    cantidad: Number,


    createAt:{
        type: Date, default: Date.now
    }
});

const Producto = mongoose.model('producto', Productos);

export default Producto;
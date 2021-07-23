import model from "../models";

export default {
    agregar: async (req, res, next) => {
        try {
            const { titulo, precio, cantidad} = req.body;

            const productos = new model.Producto({
                title, 
                price, 
                cantidad
            })

            const registro = await productos.save();
            res.status(200).json(registro);
            console.log(req.body);
        }catch (e) {
            res.status(500).send({
                message: "Ocurrio un error al guardar los datos",
            });

            next(e);
        }
    },

    consultar: async (req, res, next) => {
        try {
            const productos = await model.Producto.find();
            console.log(productos);
            res.json(productos);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrio un error al consultar",
            });

            next(error);
        }
    },


    eliminar: async (req, res, next) => {
        try{
            const eliminarProducto = await model.Producto.findByIdAndDelete(req.params.id);
            res.status(200).send({
                message: "La informacion ha sido eliminado correctamente"
            });
        } catch (error) {
            res.status(500).send({
                message: "La id para eliminar no existe",
            });

            next(error);
        }
    },

};
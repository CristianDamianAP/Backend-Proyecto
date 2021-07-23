import routerx from 'express-promise-router';

import productoController from '../controller/producto.controller';
import ProductoController from '../controller/producto.controller';


const router=routerx();

router.post('/newProducto', ProductoController.agregar);
router.get('/listarProducto', ProductoController.consultar);
router.delete('/eliminarProducto/:id', productoController.eliminar);


export default router;
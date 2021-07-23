import routerx from 'express-promise-router';

import ProductoRoute from './producto.route';

const router=routerx();

router.use('/producto', ProductoRoute);

export default router;
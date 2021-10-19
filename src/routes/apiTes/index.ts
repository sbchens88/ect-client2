import { Router } from 'express';
import mountTINGCONTROL from './tingControl';

export default function mountAPITES(router: Router) {
    const tingControl = Router();
    mountTINGCONTROL(tingControl);
    router.use('/tingControl', tingControl);
}

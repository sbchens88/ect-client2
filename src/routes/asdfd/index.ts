import { Router } from 'express';
import mountDSSADSD from './dssadsd';

export default function mountASDFD(router: Router) {
    const dssadsd = Router();
    mountDSSADSD(dssadsd);
    router.use('/dssadsd', dssadsd);
}

import { Router } from 'express';
import mountXTENSION from './xtension';

export default function mountVENDORE(router: Router) {
    const xtension = Router();
    mountXTENSION(xtension);
    router.use('/xtension', xtension);
}

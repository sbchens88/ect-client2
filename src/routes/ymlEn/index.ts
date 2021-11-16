import { Router } from 'express';
import mountDPOIN from './dpoin';

export default function mountYMLEN(router: Router) {
    const dpoin = Router();
    mountDPOIN(dpoin);
    router.use('/dpoin', dpoin);
}

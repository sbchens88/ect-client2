import { Router } from 'express';
import mountGWITHVA from './gWithVa';

export default function mountYMLTEESTIN(router: Router) {
    const gWithVa = Router();
    mountGWITHVA(gWithVa);
    router.use('/gWithVa', gWithVa);
}

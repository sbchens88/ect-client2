import { Router } from 'express';
import mountSTINGWI from './stingWi';
import mountSTINGYA from './stingYa';

export default function mountYAMLTE(router: Router) {
    const stingWi = Router();
    mountSTINGWI(stingWi);
    router.use('/stingWi', stingWi);

    const stingYa = Router();
    mountSTINGYA(stingYa);
    router.use('/stingYa', stingYa);
}

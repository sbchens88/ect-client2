import { Router } from 'express';
import mountSTINGWI from './stingWi';

export default function mountYAMLTE(router: Router) {
    const stingWi = Router();
    mountSTINGWI(stingWi);
    router.use('/stingWi', stingWi);
}

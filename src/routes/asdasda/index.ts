import { Router } from 'express';
import mountASDASDSA from './asdasdsa';

export default function mountASDASDA(router: Router) {
    const asdasdsa = Router();
    mountASDASDSA(asdasdsa);
    router.use('/asdasdsa', asdasdsa);
}

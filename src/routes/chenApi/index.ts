import { Router } from 'express';
import mountASDASDAS from './asdasdas';

export default function mountCHENAPI(router: Router) {
    const asdasdas = Router();
    mountASDASDAS(asdasdas);
    router.use('/asdasdas', asdasdas);
}

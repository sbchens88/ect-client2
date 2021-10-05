import { Router } from 'express';
import mountSECONDROUTE from './secondRoute';

export default function mountFIRSTROUTE(router: Router) {
    const secondRoute = Router();
    mountSECONDROUTE(secondRoute);
    router.use('/secondRoute', secondRoute);
}

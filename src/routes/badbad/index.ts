import { Router } from 'express';
import mountAPIROUTE from './apiRoute';

export default function mountBADBAD(router: Router) {
    const apiRoute = Router();
    mountAPIROUTE(apiRoute);
    router.use('/apiRoute', apiRoute);
}

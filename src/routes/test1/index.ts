import { Router } from 'express';
import mountAPIASDASD from './apiasdasd';

export default function mountTEST1(router: Router) {
    const apiasdasd = Router();
    mountAPIASDASD(apiasdasd);
    router.use('/apiasdasd', apiasdasd);
}

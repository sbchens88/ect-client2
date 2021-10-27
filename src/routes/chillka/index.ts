import { Router } from 'express';
import mountCHIL from './chil';

export default function mountCHILLKA(router: Router) {
    const chil = Router();
    mountCHIL(chil);
    router.use('/chil', chil);
}

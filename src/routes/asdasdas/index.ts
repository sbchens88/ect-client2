import { Router } from 'express';
import mountDASDASD from './dasdasd';

export default function mountASDASDAS(router: Router) {
    const dasdasd = Router();
    mountDASDASD(dasdasd);
    router.use('/dasdasd', dasdasd);
}

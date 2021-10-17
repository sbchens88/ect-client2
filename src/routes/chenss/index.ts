import { Router } from 'express';
import mountCONTROLLERSSS from './controllersss';

export default function mountCHENSS(router: Router) {
    const controllersss = Router();
    mountCONTROLLERSSS(controllersss);
    router.use('/controllersss', controllersss);
}

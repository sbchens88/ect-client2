import { Router } from 'express';
import mountASDAW from './asdaw';

export default function mountASDASD(router: Router) {
    const asdaw = Router();
    mountASDAW(asdaw);
    router.use('/asdaw', asdaw);
}

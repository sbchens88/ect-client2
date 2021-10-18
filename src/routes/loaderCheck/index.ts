import { Router } from 'express';
import mountLETSSEEID from './letsSeeid';

export default function mountLOADERCHECK(router: Router) {
    const letsSeeid = Router();
    mountLETSSEEID(letsSeeid);
    router.use('/letsSeeid', letsSeeid);
}

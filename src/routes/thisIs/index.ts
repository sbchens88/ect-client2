import { Router } from 'express';
import mountAQUERYTESTIN from './aQueryTestin';

export default function mountTHISIS(router: Router) {
    const aQueryTestin = Router();
    mountAQUERYTESTIN(aQueryTestin);
    router.use('/aQueryTestin', aQueryTestin);
}

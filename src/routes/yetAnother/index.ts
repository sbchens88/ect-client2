import { Router } from 'express';
import mountAPITESTROUTING from './apiTestRouting';

export default function mountYETANOTHER(router: Router) {
    const apiTestRouting = Router();
    mountAPITESTROUTING(apiTestRouting);
    router.use('/apiTestRouting', apiTestRouting);
}

import { Router } from 'express';
import mountASDWE from './asdwe';

export default function mountASD(router: Router) {
    const asdwe = Router();
    mountASDWE(asdwe);
    router.use('/asdwe', asdwe);
}

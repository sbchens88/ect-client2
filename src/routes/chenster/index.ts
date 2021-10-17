import { Router } from 'express';
import mountCONTROLLLLS from './controlllls';

export default function mountCHENSTER(router: Router) {
    const controlllls = Router();
    mountCONTROLLLLS(controlllls);
    router.use('/controlllls', controlllls);
}

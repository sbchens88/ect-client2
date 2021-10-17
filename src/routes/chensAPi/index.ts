import { Router } from 'express';
import mountCHENSCONTRL from './chensContrl';

export default function mountCHENSAPI(router: Router) {
    const chensContrl = Router();
    mountCHENSCONTRL(chensContrl);
    router.use('/chensContrl', chensContrl);
}

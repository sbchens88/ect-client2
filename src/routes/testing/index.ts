import { Router } from 'express';
import mountTHENEW from './theNew';

export default function mountTESTING(router: Router) {
    const theNew = Router();
    mountTHENEW(theNew);
    router.use('/theNew', theNew);
}

import { Router } from 'express';
import mountTESTINGA from './testingA';
import mountTSTIN from './tstin';

export default function mountCHEN(router: Router) {
    const testingA = Router();
    mountTESTINGA(testingA);
    router.use('/testingA', testingA);

    const tstin = Router();
    mountTSTIN(tstin);
    router.use('/tstin', tstin);
}

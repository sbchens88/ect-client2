import { Router } from 'express';
import mountTESTINGA from './testingA';

export default function mountCHEN(router: Router) {
    const testingA = Router();
    mountTESTINGA(testingA);
    router.use('/testingA', testingA);
}

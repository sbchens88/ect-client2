import { Router } from 'express';
import mountITESTINGA from './iTestingA';

export default function mountCHENAP(router: Router) {
    const iTestingA = Router();
    mountITESTINGA(iTestingA);
    router.use('/iTestingA', iTestingA);
}

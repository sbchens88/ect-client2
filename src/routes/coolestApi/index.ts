import { Router } from 'express';
import mountAPPLICATIONSMGR from './applicationsMgr';

export default function mountCOOLESTAPI(router: Router) {
    const applicationsMgr = Router();
    mountAPPLICATIONSMGR(applicationsMgr);
    router.use('/applicationsMgr', applicationsMgr);
}

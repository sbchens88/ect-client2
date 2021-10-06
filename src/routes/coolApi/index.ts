import { Router } from 'express';
import mountAPPLICATIONSMANAGER from './applicationsManager';

export default function mountCOOLAPI(router: Router) {
    const applicationsManager = Router();
    mountAPPLICATIONSMANAGER(applicationsManager);
    router.use('/applicationsManager', applicationsManager);
}

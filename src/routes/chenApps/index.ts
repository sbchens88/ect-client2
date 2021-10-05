import { Router } from 'express';
import mountAPPLICATIONSINAPICONTROLLER from './applicationsInApiController';

export default function mountCHENAPPS(router: Router) {
    const applicationsInApiController = Router();
    mountAPPLICATIONSINAPICONTROLLER(applicationsInApiController);
    router.use('/applicationsInApiController', applicationsInApiController);
}

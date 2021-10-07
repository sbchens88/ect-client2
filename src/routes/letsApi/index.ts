import { Router } from 'express';
import mountCONTROLLERFORAPI from './controllerForApi';

export default function mountLETSAPI(router: Router) {
    const controllerForApi = Router();
    mountCONTROLLERFORAPI(controllerForApi);
    router.use('/controllerForApi', controllerForApi);
}

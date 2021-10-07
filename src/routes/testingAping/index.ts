import { Router } from 'express';
import mountTESTINGCONTROLLER from './testingController';

export default function mountTESTINGAPING(router: Router) {
    const testingController = Router();
    mountTESTINGCONTROLLER(testingController);
    router.use('/testingController', testingController);
}

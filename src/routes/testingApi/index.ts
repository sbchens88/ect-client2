import { Router } from 'express';
import mountTESTCONTROLLER from './testController';

export default function mountTESTINGAPI(router: Router) {
    const testController = Router();
    mountTESTCONTROLLER(testController);
    router.use('/testController', testController);
}

import { Router } from 'express';
import mountASQCONTROLLER from './asqController';

export default function mountCHENASQ(router: Router) {
    const asqController = Router();
    mountASQCONTROLLER(asqController);
    router.use('/asqController', asqController);
}

import { Router } from 'express';
import mountCHICONTROLLER from './chiController';

export default function mountCHIAPI(router: Router) {
    const chiController = Router();
    mountCHICONTROLLER(chiController);
    router.use('/chiController', chiController);
}

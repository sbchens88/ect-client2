import { Router } from 'express';
import mountTOASTCONTRL from './toastContrl';

export default function mountTOASTAPI(router: Router) {
    const toastContrl = Router();
    mountTOASTCONTRL(toastContrl);
    router.use('/toastContrl', toastContrl);
}

import { Router } from 'express';
import mountASDASDWW from './asdasdww';

export default function mountREFVASD(router: Router) {
    const asdasdww = Router();
    mountASDASDWW(asdasdww);
    router.use('/asdasdww', asdasdww);
}

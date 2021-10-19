import { Router } from 'express';
import mountASTCONTRLR from './astContrlr';

export default function mountTESTINGTO(router: Router) {
    const astContrlr = Router();
    mountASTCONTRLR(astContrlr);
    router.use('/astContrlr', astContrlr);
}

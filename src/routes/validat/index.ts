import { Router } from 'express';
import mountORSTESTING from './orsTesting';

export default function mountVALIDAT(router: Router) {
    const orsTesting = Router();
    mountORSTESTING(orsTesting);
    router.use('/orsTesting', orsTesting);
}

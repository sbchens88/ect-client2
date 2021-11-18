import { Router } from 'express';
import mountSDFFSD from './sdffsd';

export default function mountASDF(router: Router) {
    const sdffsd = Router();
    mountSDFFSD(sdffsd);
    router.use('/sdffsd', sdffsd);
}

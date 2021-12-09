import { Router } from 'express';
import mountAINGEN from './aingen';

export default function mountEDITORQ(router: Router) {
    const aingen = Router();
    mountAINGEN(aingen);
    router.use('/aingen', aingen);
}

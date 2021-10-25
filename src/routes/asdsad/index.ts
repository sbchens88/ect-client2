import { Router } from 'express';
import mountASDASDAWQE from './asdasdawqe';

export default function mountASDSAD(router: Router) {
    const asdasdawqe = Router();
    mountASDASDAWQE(asdasdawqe);
    router.use('/asdasdawqe', asdasdawqe);
}

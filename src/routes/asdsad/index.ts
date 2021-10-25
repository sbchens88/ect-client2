import { Router } from 'express';
import mountASDASDAWQE from './asdasdawqe';
import mountASDASDERTYGFAWQE from './asdasdertygfawqe';

export default function mountASDSAD(router: Router) {
    const asdasdawqe = Router();
    mountASDASDAWQE(asdasdawqe);
    router.use('/asdasdawqe', asdasdawqe);

    const asdasdertygfawqe = Router();
    mountASDASDERTYGFAWQE(asdasdertygfawqe);
    router.use('/asdasdertygfawqe', asdasdertygfawqe);
}

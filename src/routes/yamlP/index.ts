import { Router } from 'express';
import mountARAMST from './aramsT';

export default function mountYAMLP(router: Router) {
    const aramsT = Router();
    mountARAMST(aramsT);
    router.use('/aramsT', aramsT);
}

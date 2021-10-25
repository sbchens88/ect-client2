import { Router } from 'express';
import mountACONTROLLERA from './acontrollera';

export default function mountAAPI(router: Router) {
    const acontrollera = Router();
    mountACONTROLLERA(acontrollera);
    router.use('/acontrollera', acontrollera);
}

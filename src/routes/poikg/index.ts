import { Router } from 'express';
import mountYUJHSDSA from './yujhsdsa';

export default function mountPOIKG(router: Router) {
    const yujhsdsa = Router();
    mountYUJHSDSA(yujhsdsa);
    router.use('/yujhsdsa', yujhsdsa);
}

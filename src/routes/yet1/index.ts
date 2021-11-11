import { Router } from 'express';
import mountANOTHER from './another';

export default function mountYET1(router: Router) {
    const another = Router();
    mountANOTHER(another);
    router.use('/another', another);
}

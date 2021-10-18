import { Router } from 'express';
import mountTHECONTL from './theContl';

export default function mountCHEAPI(router: Router) {
    const theContl = Router();
    mountTHECONTL(theContl);
    router.use('/theContl', theContl);
}

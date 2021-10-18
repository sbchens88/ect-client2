import { Router } from 'express';
import mountTHEAPICON from './theApiCon';

export default function mountJUSTTESTING(router: Router) {
    const theApiCon = Router();
    mountTHEAPICON(theApiCon);
    router.use('/theApiCon', theApiCon);
}

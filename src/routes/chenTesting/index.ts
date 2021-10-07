import { Router } from 'express';
import mountTHEPARAMFEATURE from './theParamFeature';

export default function mountCHENTESTING(router: Router) {
    const theParamFeature = Router();
    mountTHEPARAMFEATURE(theParamFeature);
    router.use('/theParamFeature', theParamFeature);
}

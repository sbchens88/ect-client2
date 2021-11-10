import { Router } from 'express';
import mountTHENEW from './theNew';
import mountYAMLPARAM from './yamlParam';

export default function mountTESTING(router: Router) {
    const theNew = Router();
    mountTHENEW(theNew);
    router.use('/theNew', theNew);

    const yamlParam = Router();
    mountYAMLPARAM(yamlParam);
    router.use('/yamlParam', yamlParam);
}

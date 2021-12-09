import { Router } from 'express';
import mountTHEMONACO_ from './themonaco_';

export default function mountEDITOR_(router: Router) {
    const themonaco_ = Router();
    mountTHEMONACO_(themonaco_);
    router.use('/themonaco​', themonaco_);
}

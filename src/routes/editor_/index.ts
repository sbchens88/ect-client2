import { Router } from 'express';
import mountMONACO_2 from './monaco_2';

export default function mountEDITOR_(router: Router) {
    const monaco_2 = Router();
    mountMONACO_2(monaco_2);
    router.use('/monaco​2', monaco_2);
}

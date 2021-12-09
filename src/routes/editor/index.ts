import { Router } from 'express';
import mountMONACO from './monaco';

export default function mountEDITOR(router: Router) {
    const monaco = Router();
    mountMONACO(monaco);
    router.use('/monaco', monaco);
}

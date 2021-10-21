import { Router } from 'express';
import mountDELTEMETHODFUN from './delteMethodFun';

export default function mountTESTON(router: Router) {
    const delteMethodFun = Router();
    mountDELTEMETHODFUN(delteMethodFun);
    router.use('/delteMethodFun', delteMethodFun);
}

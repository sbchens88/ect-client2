import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountMONCO from './monco';
import mountMONACO2 from './monaco2';
import mountMONACOEDITOR from './monacoeditor';
import mountMONACO from './monaco';
import mountMONACOED from './monacoEd';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const monco = Router();
    mountMONCO(monco);
    router.use('/monco', monco);

    const monaco2 = Router();
    mountMONACO2(monaco2);
    router.use('/monaco2', monaco2);

    const monacoeditor = Router();
    mountMONACOEDITOR(monacoeditor);
    router.use('/monacoeditor', monacoeditor);

    const monaco = Router();
    mountMONACO(monaco);
    router.use('/monaco', monaco);

    const monacoEd = Router();
    mountMONACOED(monacoEd);
    router.use('/monacoEd', monacoEd);
}

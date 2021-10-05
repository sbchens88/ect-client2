import express, { Router } from 'express';
import mountRPG from './rpg';
import mountSQL from './sql';
import mountAARONTEST3 from './aarontest3';

export default function mountAPI(router: Router) {
    // You can set auth requirements on a whole API section by putting `router.use(requireAuth);` here instead of on individual route definitions

    const rpg = express.Router();
    mountRPG(rpg);
    router.use('/rpg', rpg);

    const sql = express.Router();
    mountSQL(sql);
    router.use('/sql', sql);

    const aarontest3 = Router();
    mountAARONTEST3(aarontest3);
    router.use('/aarontest3', aarontest3);
}

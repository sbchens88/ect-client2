import { Router } from 'express';
import * as asdasdawqeController from 'src/controllers/asdasdawqe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDAWQE(router: Router) {
    router.get(
        '/qweqwe2',
        validate(validators.Qweffss),
        respond((req: any) => asdasdawqeController.Qweffss(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/qweqwe22',
        validate(validators.Qweffssdd),
        respond((req: any) => asdasdawqeController.Qweffssdd(Object.assign({}, req.params, req.body, req.query)))
    );
}

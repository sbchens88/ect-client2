import { Router } from 'express';
import * as chensContrlController from 'src/controllers/chens-contrl';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHENSCONTRL(router: Router) {
    router.get(
        '/chensEpoint',
        validate(validators.ChensEpoint),
        respond((req: any) => chensContrlController.ChensEpoint(Object.assign({}, req.params, req.body, req.query)))
    );
}

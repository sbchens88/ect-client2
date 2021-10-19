import { Router } from 'express';
import * as astContrlrController from 'src/controllers/ast-contrlr';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASTCONTRLR(router: Router) {
    router.get(
        '/someDataEndpointsss',
        validate(validators.SomeD),
        respond((req: any) => astContrlrController.SomeD(Object.assign({}, req.params, req.body, req.query)))
    );
}

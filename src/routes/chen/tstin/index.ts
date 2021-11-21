import { Router } from 'express';
import * as tstinController from 'src/controllers/tstin';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTSTIN(router: Router) {
    router.get(
        '/gvalidators',
        validate(validators.ValidatopnTesting1),
        respond((req: any) => tstinController.ValidatopnTesting1(Object.assign({}, req.params, req.body, req.query)))
    );
}

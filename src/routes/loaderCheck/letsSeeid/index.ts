import { Router } from 'express';
import * as letsSeeidController from 'src/controllers/lets-seeid';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountLETSSEEID(router: Router) {
    router.get(
        '/workigloadaer',
        validate(validators.Asdasfgbvdf),
        respond((req: any) => letsSeeidController.Asdasfgbvdf(Object.assign({}, req.params, req.body, req.query)))
    );
}

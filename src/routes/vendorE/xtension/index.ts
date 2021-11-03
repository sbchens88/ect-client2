import { Router } from 'express';
import * as xtensionController from 'src/controllers/xtension';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountXTENSION(router: Router) {
    router.post(
        '/testing8',
        validate(validators.Psnaido),
        respond((req: any) => xtensionController.Psnaido(Object.assign({}, req.params, req.body, req.query)))
    );
}

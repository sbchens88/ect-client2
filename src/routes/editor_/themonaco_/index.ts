import { Router } from 'express';
import * as themonacoController from 'src/controllers/themonaco_';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as theMonacoController from 'src/controllers/theMonaco';

export default function mountTHEMONACO_(router: Router) {
    router.get(
        '/testigEndpoint',
        validate(validators.Moncofunc),
        respond((req: any) => theMonacoController.Moncofunc(Object.assign({}, req.params, req.body, req.query)))
    );
}

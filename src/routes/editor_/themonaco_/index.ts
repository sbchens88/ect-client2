import { Router } from 'express';
import * as themonacoController from 'src/controllers/themonaco_';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as themonacoController from 'src/controllers/themonaco';

export default function mountTHEMONACO_(router: Router) {
    router.get(
        '/testigEndpoint',
        validate(validators.Moncofunc),
        respond((req: any) => themonacoController.Moncofunc(Object.assign({}, req.params, req.body, req.query)))
    );
}

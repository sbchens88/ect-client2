import { Router } from 'express';
import * as monacoController from 'src/controllers/monaco';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONACO(router: Router) {
    router.get(
        '/testigEndpoint',
        validate(validators.Monacofunc),
        respond((req: any) => monacoController.Monacofunc(Object.assign({}, req.params, req.body, req.query)))
    );
}

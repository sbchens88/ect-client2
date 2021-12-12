import { Router } from 'express';
import * as monacoController from 'src/controllers/monaco';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONACO(router: Router) {
    router.post(
        '/testEP',
        validate(validators.TestingMoaco),
        respond((req: any) => monacoController.TestingMoaco(Object.assign({}, req.params, req.body, req.query)))
    );
}

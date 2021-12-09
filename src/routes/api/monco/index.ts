import { Router } from 'express';
import * as moncoController from 'src/controllers/monco';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONCO(router: Router) {
    router.get(
        '/editorTest',
        validate(validators.Moncofun),
        respond((req: any) => moncoController.Moncofun(Object.assign({}, req.params, req.body, req.query)))
    );
}

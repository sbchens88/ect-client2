import { Router } from 'express';
import * as aramsTController from 'src/controllers/arams-t';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountARAMST(router: Router) {
    router.get(
        '/esting1',
        validate(validators.SomeYamlPArTest),
        respond((req: any) => aramsTController.SomeYamlPArTest(Object.assign({}, req.params, req.body, req.query)))
    );
}

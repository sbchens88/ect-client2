import { Router } from 'express';
import * as monacoeditorController from 'src/controllers/monacoeditor';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONACOEDITOR(router: Router) {
    router.get(
        '/endasd',
        validate(validators.Asd),
        respond((req: any) => monacoeditorController.Asd(Object.assign({}, req.params, req.body, req.query)))
    );
}

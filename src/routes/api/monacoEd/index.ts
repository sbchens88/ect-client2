import { Router } from 'express';
import * as monacoEdController from 'src/controllers/monacoEd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONACOED(router: Router) {
    router.get(
        '/itorTest',
        validate(validators.EditorTesting),
        respond((req: any) => monacoEdController.EditorTesting(Object.assign({}, req.params, req.body, req.query)))
    );
}

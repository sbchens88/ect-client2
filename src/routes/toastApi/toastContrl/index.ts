import { Router } from 'express';
import * as toastContrlController from 'src/controllers/toast-contrl';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTOASTCONTRL(router: Router) {
    router.get(
        '/testingToasting',
        validate(validators.TestingToasting),
        respond((req: any) => toastContrlController.TestingToasting(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/testingToasting1',
        validate(validators.Asdsadasd),
        respond((req: any) => toastContrlController.Asdsadasd(Object.assign({}, req.params, req.body, req.query)))
    );
}

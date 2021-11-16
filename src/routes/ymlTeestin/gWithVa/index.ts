import { Router } from 'express';
import * as gWithVaController from 'src/controllers/g-with-va';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountGWITHVA(router: Router) {
    router.get(
        '/lidators',
        validate(validators.Saddfhgbv),
        respond((req: any) => gWithVaController.Saddfhgbv(Object.assign({}, req.params, req.body, req.query)))
    );
}

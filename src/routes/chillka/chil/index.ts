import { Router } from 'express';
import * as chilController from 'src/controllers/chil';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHIL(router: Router) {
    router.patch(
        '/getAppsYte',
        validate(validators.SomerandomFunction),
        respond((req: any) => chilController.SomerandomFunction(Object.assign({}, req.params, req.body, req.query)))
    );
}

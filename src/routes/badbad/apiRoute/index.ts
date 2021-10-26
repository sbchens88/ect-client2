import { Router } from 'express';
import * as apiRouteController from 'src/controllers/api-route';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPIROUTE(router: Router) {
    router.get(
        '/ohNo',
        validate(validators.Function),
        respond((req: any) => apiRouteController.Function(Object.assign({}, req.params, req.body, req.query)))
    );
}

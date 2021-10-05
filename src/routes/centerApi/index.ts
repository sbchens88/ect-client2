import { Router } from 'express';
import * as centerApiController from 'src/controllers/center-api';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCENTERAPI(router: Router) {
    router.put(
        '/centerRandom',
        validate(validators.GetRandomData),
        respond((req: any) => centerApiController.GetRandomData(Object.assign({}, req.params, req.body, req.query)))
    );
}

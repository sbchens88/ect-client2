import { Router } from 'express';
import * as aQueryTestinController from 'src/controllers/a-query-testin';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAQUERYTESTIN(router: Router) {
    router.patch(
        '/routingEndpoint',
        validate(validators.RoutingEndpoiutFunc),
        respond((req: any) =>
            aQueryTestinController.RoutingEndpoiutFunc(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

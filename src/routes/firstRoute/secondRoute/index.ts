import { Router } from 'express';
import * as secondRouteController from 'src/controllers/second-route';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSECONDROUTE(router: Router) {
    router.get(
        '/thirdRoute',
        validate(validators.SomeFunc),
        respond((req: any) => secondRouteController.SomeFunc(req.query))
    );
}

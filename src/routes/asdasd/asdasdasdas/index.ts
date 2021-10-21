import { Router } from 'express';
import * as asdasdasdasController from 'src/controllers/asdasdasdas';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDASDAS(router: Router) {
    router.get(
        '/asdasdasd',
        validate(validators.Qweqwe),
        respond((req: any) => asdasdasdasController.Qweqwe(Object.assign({}, req.params, req.body, req.query)))
    );
}

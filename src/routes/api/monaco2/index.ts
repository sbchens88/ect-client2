import { Router } from 'express';
import * as monaco2Controller from 'src/controllers/monaco2';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountMONACO2(router: Router) {
    router.get(
        '/endpoint',
        validate(validators.Func),
        respond((req: any) => monaco2Controller.Func(Object.assign({}, req.params, req.body, req.query)))
    );
}

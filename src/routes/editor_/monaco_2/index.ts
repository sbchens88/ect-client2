import { Router } from 'express';
import * as monaco2Controller from 'src/controllers/monaco_2';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as monaco2Controller from 'src/controllers/monaco2';

export default function mountMONACO_2(router: Router) {
    router.get(
        '/testigEndpoint',
        validate(validators.Mncfunss),
        respond((req: any) => monaco2Controller.Mncfunss(Object.assign({}, req.params, req.body, req.query)))
    );
}

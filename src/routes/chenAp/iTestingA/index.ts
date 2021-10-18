import { Router } from 'express';
import * as iTestingAController from 'src/controllers/i-testing-a';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountITESTINGA(router: Router) {
    router.get(
        '/ndLoad/:appId',
        validate(validators.Qwertyukmnb),
        respond((req: any) => iTestingAController.Qwertyukmnb(Object.assign({}, req.params, req.body, req.query)))
    );
}

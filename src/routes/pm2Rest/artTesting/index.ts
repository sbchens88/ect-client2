import { Router } from 'express';
import * as artTestingController from 'src/controllers/art-testing';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountARTTESTING(router: Router) {
    router.get(
        '/apiGenratorCall',
        validate(validators.ApiGenCall),
        respond((req: any) => artTestingController.ApiGenCall(Object.assign({}, req.params, req.body, req.query)))
    );
}

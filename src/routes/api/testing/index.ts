import { Router } from 'express';
import * as testingController from 'src/controllers/testing';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTING(router: Router) {
    router.get(
        '/withParam/:id',
        validate(validators.TheParamInputFunction),
        respond((req: any) =>
            testingController.TheParamInputFunction(Object.assign({}, req.params, req.body, req.query))
        )
    );
    router.get(
        '/withParam/:id',
        validate(validators.TheParamInputFunction123),
        respond((req: any) =>
            testingController.TheParamInputFunction123(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

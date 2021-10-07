import { Router } from 'express';
import * as theParamFeatureController from 'src/controllers/the-param-feature';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTHEPARAMFEATURE(router: Router) {
    router.patch(
        '/getApplicationByIdKey',
        validate(validators.GetApplicationByIdKey),
        respond((req: any) =>
            theParamFeatureController.GetApplicationByIdKey(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

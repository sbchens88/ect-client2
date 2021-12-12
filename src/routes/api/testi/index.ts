import { Router } from 'express';
import * as testiController from 'src/controllers/testi';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTI(router: Router) {
    router.get(
        '/ngParms/:appId',
        validate(validators.GetParamsappId),
        respond((req: any) => testiController.GetParamsappId(Object.assign({}, req.params, req.body, req.query)))
    );
}

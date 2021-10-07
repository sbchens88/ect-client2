import { Router } from 'express';
import * as testingControllerController from 'src/controllers/testing-controller';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTINGCONTROLLER(router: Router) {
    router.put(
        '/getAppByIdAndLib',
        validate(validators.GetAppByIdAndLib),
        respond((req: any) =>
            testingControllerController.GetAppByIdAndLib(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

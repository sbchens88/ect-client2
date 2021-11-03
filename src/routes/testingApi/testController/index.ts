import { Router } from 'express';
import * as testControllerController from 'src/controllers/test-controller';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTCONTROLLER(router: Router) {
    router.get(
        '/testEndpoint1',
        validate(validators.GetSomeEpData),
        respond((req: any) =>
            testControllerController.GetSomeEpData(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

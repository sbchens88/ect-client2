import { Router } from 'express';
import * as apiTestRoutingController from 'src/controllers/api-test-routing';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPITESTROUTING(router: Router) {
    router.get(
        '/getSomeRDAt',
        validate(validators.GetSomeRandsDats),
        respond((req: any) =>
            apiTestRoutingController.GetSomeRandsDats(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

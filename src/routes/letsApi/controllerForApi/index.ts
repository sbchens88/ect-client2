import { Router } from 'express';
import * as controllerForApiController from 'src/controllers/controller-for-api';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCONTROLLERFORAPI(router: Router) {
    router.put(
        '/getUserByUserNameEP',
        validate(validators.GetUserByUserNameEp),
        respond((req: any) =>
            controllerForApiController.GetUserByUserNameEp(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

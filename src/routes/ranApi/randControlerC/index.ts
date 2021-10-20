import { Router } from 'express';
import * as randControlerCController from 'src/controllers/rand-controler-c';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountRANDCONTROLERC(router: Router) {
    router.delete(
        '/testingDeleteFunction',
        validate(validators.TestingDeleteFunction),
        respond((req: any) =>
            randControlerCController.TestingDeleteFunction(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

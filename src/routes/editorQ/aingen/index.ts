import { Router } from 'express';
import * as aingenController from 'src/controllers/aingen';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAINGEN(router: Router) {
    router.get(
        '/dpoint',
        validate(validators.Asdeee),
        respond((req: any) => aingenController.Asdeee(Object.assign({}, req.params, req.body, req.query)))
    );
}

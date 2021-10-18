import { Router } from 'express';
import * as theContlController from 'src/controllers/the-contl';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTHECONTL(router: Router) {
    router.get(
        '/getSompp',
        validate(validators.Asdsdswww),
        respond((req: any) => theContlController.Asdsdswww(Object.assign({}, req.params, req.body, req.query)))
    );
}

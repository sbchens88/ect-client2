import { Router } from 'express';
import * as asdawController from 'src/controllers/asdaw';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDAW(router: Router) {
    router.get(
        '/ewfsdvcc',
        validate(validators.Qwedfscxv),
        respond((req: any) => asdawController.Qwedfscxv(Object.assign({}, req.params, req.body, req.query)))
    );
}

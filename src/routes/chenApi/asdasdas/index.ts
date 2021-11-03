import { Router } from 'express';
import * as asdasdasController from 'src/controllers/asdasdas';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDAS(router: Router) {
    router.patch(
        '/dasdasd123',
        validate(validators.Qwdfghjbvcc),
        respond((req: any) => asdasdasController.Qwdfghjbvcc(Object.assign({}, req.params, req.body, req.query)))
    );
}

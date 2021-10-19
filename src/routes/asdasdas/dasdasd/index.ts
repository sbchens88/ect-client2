import { Router } from 'express';
import * as dasdasdController from 'src/controllers/dasdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDASDASD(router: Router) {
    router.get(
        '/asdasasd',
        validate(validators.Asdasdasdasd),
        respond((req: any) => dasdasdController.Asdasdasdasd(Object.assign({}, req.params, req.body, req.query)))
    );
}

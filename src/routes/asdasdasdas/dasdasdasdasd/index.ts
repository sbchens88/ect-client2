import { Router } from 'express';
import * as dasdasdasdasdController from 'src/controllers/dasdasdasdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDASDASDASDASD(router: Router) {
    router.get(
        '/asdasasdasd',
        validate(validators.Qweruidfofj),
        respond((req: any) => dasdasdasdasdController.Qweruidfofj(Object.assign({}, req.params, req.body, req.query)))
    );
}

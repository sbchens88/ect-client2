import { Router } from 'express';
import * as dasdasdasdasdController from 'src/controllers/dasdasdasdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDASDASDASDASD(router: Router) {
    router.get(
        '/asdasasdasd1',
        validate(validators.Qweruidfofjasd),
        respond((req: any) =>
            dasdasdasdasdController.Qweruidfofjasd(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

import { Router } from 'express';
import * as asdweController from 'src/controllers/asdwe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDWE(router: Router) {
    router.post(
        '/asdsdsa8899',
        validate(validators.Regffdssag),
        respond((req: any) => asdweController.Regffdssag(Object.assign({}, req.params, req.body, req.query)))
    );
}

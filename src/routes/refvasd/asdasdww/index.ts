import { Router } from 'express';
import * as asdasdwwController from 'src/controllers/asdasdww';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDWW(router: Router) {
    router.delete(
        '/pepejnjvr44',
        validate(validators.Pokjhbvcgh),
        respond((req: any) => asdasdwwController.Pokjhbvcgh(Object.assign({}, req.params, req.body, req.query)))
    );
}

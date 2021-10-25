import { Router } from 'express';
import * as lkjhgfdsController from 'src/controllers/lkjhgfds';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountLKJHGFDS(router: Router) {
    router.get(
        '/pkmnhyt',
        validate(validators.PkmnhytFunc),
        respond((req: any) => lkjhgfdsController.PkmnhytFunc(Object.assign({}, req.params, req.body, req.query)))
    );
}

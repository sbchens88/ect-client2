import { Router } from 'express';
import * as asdasdsaController from 'src/controllers/asdasdsa';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDSA(router: Router) {
    router.put(
        '/dasdaq43423',
        validate(validators.Sadfghjk),
        respond((req: any) => asdasdsaController.Sadfghjk(Object.assign({}, req.params, req.body, req.query)))
    );
}

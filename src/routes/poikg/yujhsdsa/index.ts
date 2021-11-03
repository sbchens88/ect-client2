import { Router } from 'express';
import * as yujhsdsaController from 'src/controllers/yujhsdsa';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountYUJHSDSA(router: Router) {
    router.delete(
        '/reepfoj8888',
        validate(validators.Opdfihokvjbh),
        respond((req: any) => yujhsdsaController.Opdfihokvjbh(Object.assign({}, req.params, req.body, req.query)))
    );
}

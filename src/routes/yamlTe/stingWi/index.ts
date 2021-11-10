import { Router } from 'express';
import * as stingWiController from 'src/controllers/sting-wi';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSTINGWI(router: Router) {
    router.get(
        '/thParams',
        validate(validators.YamlTest),
        respond((req: any) => stingWiController.YamlTest(Object.assign({}, req.params, req.body, req.query)))
    );
}

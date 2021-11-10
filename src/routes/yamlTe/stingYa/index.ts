import { Router } from 'express';
import * as stingYaController from 'src/controllers/sting-ya';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSTINGYA(router: Router) {
    router.get(
        '/mlTesting',
        validate(validators.YamlTeeing),
        respond((req: any) => stingYaController.YamlTeeing(Object.assign({}, req.params, req.body, req.query)))
    );
}

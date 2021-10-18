import { Router } from 'express';
import * as theApiConController from 'src/controllers/the-api-con';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTHEAPICON(router: Router) {
    router.get(
        '/getSomeThings/:num',
        validate(validators.AgetsomeThings),
        respond((req: any) => theApiConController.AgetsomeThings(Object.assign({}, req.params, req.body, req.query)))
    );
}

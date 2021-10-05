import { Router } from 'express';
import * as aarontest3Controller from 'src/controllers/aarontest-3';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAARONTEST3(router: Router) {
    router.delete(
        '/testtestsql',
        validate(validators.Runtestsqltest),
        respond((req: any) => aarontest3Controller.Runtestsqltest(Object.assign({}, req.params, req.body, req.query)))
    );
}

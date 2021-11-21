import { Router } from 'express';
import * as chentest1116Controller from 'src/controllers/chentest11_16';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
import * as chentest1116Controller from 'src/controllers/chentest_1116';

export default function mountCHENTEST11_16(router: Router) {
    router.post(
        '/testing13',
        validate(validators.Sdawert4Y5Nn),
        respond((req: any) => chentest1116Controller.Sdawert4Y5Nn(Object.assign({}, req.params, req.body, req.query)))
    );
}

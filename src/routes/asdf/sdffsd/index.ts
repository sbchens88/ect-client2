import { Router } from 'express';
import * as sdffsdController from 'src/controllers/sdffsd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountSDFFSD(router: Router) {
    router.put(
        '/dfgvxaq',
        validate(validators.Dsafsdf),
        respond((req: any) => sdffsdController.Dsafsdf(Object.assign({}, req.params, req.body, req.query)))
    );
}

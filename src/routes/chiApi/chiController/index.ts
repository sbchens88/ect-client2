import { Router } from 'express';
import * as chiControllerController from 'src/controllers/chi-controller';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCHICONTROLLER(router: Router) {
    router.get(
        '/chiEndpoint',
        validate(validators.ChiEndpoint),
        respond((req: any) => chiControllerController.ChiEndpoint(Object.assign({}, req.params, req.body, req.query)))
    );
}

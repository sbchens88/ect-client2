import { Router } from 'express';
import * as tingControlController from 'src/controllers/ting-control';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTINGCONTROL(router: Router) {
    router.get(
        '/lerEndpoint1',
        validate(validators.LerEndpointd),
        respond((req: any) => tingControlController.LerEndpointd(Object.assign({}, req.params, req.body, req.query)))
    );
}

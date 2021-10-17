import { Router } from 'express';
import * as controllllsController from 'src/controllers/controlllls';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCONTROLLLLS(router: Router) {
    router.get(
        '/getApl/:appId',
        validate(validators.AsdsnSssSwwe),
        respond((req: any) => controllllsController.AsdsnSssSwwe(Object.assign({}, req.params, req.body, req.query)))
    );
}

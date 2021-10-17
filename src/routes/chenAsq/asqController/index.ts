import { Router } from 'express';
import * as asqControllerController from 'src/controllers/asq-controller';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASQCONTROLLER(router: Router) {
    router.get(
        '/getDataEndpointaa',
        validate(validators.GetDataEndpointaa),
        respond((req: any) =>
            asqControllerController.GetDataEndpointaa(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

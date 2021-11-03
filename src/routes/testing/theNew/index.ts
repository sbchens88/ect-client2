import { Router } from 'express';
import * as theNewController from 'src/controllers/the-new';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTHENEW(router: Router) {
    router.patch(
        '/featureSwag',
        validate(validators.FeatureSwag),
        respond((req: any) => theNewController.FeatureSwag(Object.assign({}, req.params, req.body, req.query)))
    );
}

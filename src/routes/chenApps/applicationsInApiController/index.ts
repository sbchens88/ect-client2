import { Router } from 'express';
import * as applicationsInApiControllerController from 'src/controllers/applications-in-api-controller';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPPLICATIONSINAPICONTROLLER(router: Router) {
    router.put(
        '/getApplicationsRecordss',
        validate(validators.GetApplicationsRecordss),
        respond((req: any) =>
            applicationsInApiControllerController.GetApplicationsRecordss(
                Object.assign({}, req.params, req.body, req.query)
            )
        )
    );
}

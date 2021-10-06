import { Router } from 'express';
import * as applicationsManagerController from 'src/controllers/applications-manager';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPPLICATIONSMANAGER(router: Router) {
    router.get(
        '/getAppByIdTest',
        validate(validators.GetAppByIdTesting),
        respond((req: any) =>
            applicationsManagerController.GetAppByIdTesting(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

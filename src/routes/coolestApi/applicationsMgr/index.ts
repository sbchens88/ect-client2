import { Router } from 'express';
import * as applicationsMgrController from 'src/controllers/applications-mgr';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPPLICATIONSMGR(router: Router) {
    router.delete(
        '/deleteAppByIdtestin',
        validate(validators.DeleteAppByIdtestin),
        respond((req: any) =>
            applicationsMgrController.DeleteAppByIdtestin(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

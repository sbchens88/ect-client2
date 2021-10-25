import { Router } from 'express';
import * as testingAController from 'src/controllers/testing-a';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountTESTINGA(router: Router) {
    router.get(
        '/getSData',
        validate(validators.GetSData),
        respond((req: any) => testingAController.GetSData(Object.assign({}, req.params, req.body, req.query)))
    );
}

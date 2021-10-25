import { Router } from 'express';
import * as acontrolleraController from 'src/controllers/acontrollera';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountACONTROLLERA(router: Router) {
    router.get(
        '/aendpoindaa',
        validate(validators.Aendpoindaa),
        respond((req: any) => acontrolleraController.Aendpoindaa(Object.assign({}, req.params, req.body, req.query)))
    );
}

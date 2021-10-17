import { Router } from 'express';
import * as controllersssController from 'src/controllers/controllersss';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountCONTROLLERSSS(router: Router) {
    router.get(
        '/getYamlTee',
        validate(validators.GetYamlTee),
        respond((req: any) => controllersssController.GetYamlTee(Object.assign({}, req.params, req.body, req.query)))
    );
}

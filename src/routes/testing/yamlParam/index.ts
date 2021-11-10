import { Router } from 'express';
import * as yamlParamController from 'src/controllers/yaml-param';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountYAMLPARAM(router: Router) {
    router.get(
        '/enpoint',
        validate(validators.Sdfg),
        respond((req: any) => yamlParamController.Sdfg(Object.assign({}, req.params, req.body, req.query)))
    );
}

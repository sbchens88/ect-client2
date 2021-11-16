import { Router } from 'express';
import * as orsTestingController from 'src/controllers/ors-testing';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountORSTESTING(router: Router) {
    router.get(
        '/Yamlep',
        validate(validators.YamlValidTest),
        respond((req: any) => orsTestingController.YamlValidTest(Object.assign({}, req.params, req.body, req.query)))
    );
}

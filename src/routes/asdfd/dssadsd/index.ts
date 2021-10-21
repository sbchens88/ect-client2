import { Router } from 'express';
import * as dssadsdController from 'src/controllers/dssadsd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDSSADSD(router: Router) {
    router.get(
        '/sdssd',
        validate(validators.Ojihugyvh),
        respond((req: any) => dssadsdController.Ojihugyvh(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/sdssd1',
        validate(validators.Ojihugyvh),
        respond((req: any) => dssadsdController.Ojihugyvh(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/sdssd1',
        validate(validators.Ojihugyvh),
        respond((req: any) => dssadsdController.Ojihugyvh(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/sdssd1',
        validate(validators.Ojihugyvh),
        respond((req: any) => dssadsdController.Ojihugyvh(Object.assign({}, req.params, req.body, req.query)))
    );
    router.get(
        '/sdssd1',
        validate(validators.Ojihugyvh),
        respond((req: any) => dssadsdController.Ojihugyvh(Object.assign({}, req.params, req.body, req.query)))
    );
}

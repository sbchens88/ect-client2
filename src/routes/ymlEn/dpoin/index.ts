import { Router } from 'express';
import * as dpoinController from 'src/controllers/dpoin';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDPOIN(router: Router) {
    router.patch(
        '/tPatch',
        validate(validators.YmlEndpoitfunccc),
        respond((req: any) => dpoinController.YmlEndpoitfunccc(Object.assign({}, req.params, req.body, req.query)))
    );
}

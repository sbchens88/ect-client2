import { Router } from 'express';
import * as qweqwewqController from 'src/controllers/qweqwewq';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountQWEQWEWQ(router: Router) {
    router.get(
        '/eqweqwewe',
        validate(validators.Asdafrbdsasaaa),
        respond((req: any) => qweqwewqController.Asdafrbdsasaaa(Object.assign({}, req.params, req.body, req.query)))
    );
}

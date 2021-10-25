import { Router } from 'express';
import * as asdasdertygfawqeController from 'src/controllers/asdasdertygfawqe';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountASDASDERTYGFAWQE(router: Router) {
    router.get(
        '/qweqwe22',
        validate(validators.Qweffssddwerhgf),
        respond((req: any) =>
            asdasdertygfawqeController.Qweffssddwerhgf(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

import { Router } from 'express';
import * as delteMethodFunController from 'src/controllers/delte-method-fun';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountDELTEMETHODFUN(router: Router) {
    router.delete(
        '/gettingSomeApDIngo',
        validate(validators.GettingSomeApDIngo),
        respond((req: any) =>
            delteMethodFunController.GettingSomeApDIngo(Object.assign({}, req.params, req.body, req.query))
        )
    );
    router.delete(
        '/gettingSomeApDIngoqwe',
        validate(validators.GettingSomeApDIngo),
        respond((req: any) =>
            delteMethodFunController.GettingSomeApDIngo(Object.assign({}, req.params, req.body, req.query))
        )
    );
    router.delete(
        '/gettingSomeApDIngoqwe1',
        validate(validators.GettingSomeApDIngoff),
        respond((req: any) =>
            delteMethodFunController.GettingSomeApDIngoff(Object.assign({}, req.params, req.body, req.query))
        )
    );
}

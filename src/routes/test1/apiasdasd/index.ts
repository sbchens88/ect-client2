import { Router } from 'express';
import * as apiasdasdController from 'src/controllers/apiasdasd';
import validate from 'src/middlewares/validate';
import respond from 'src/middlewares/respond';
import * as validators from './validators';
export default function mountAPIASDASD(router: Router) {
    router.get(
        '/eradanisdasd',
        validate(validators.EradaniApiasdasd),
        respond((req: any) => apiasdasdController.EradaniApiasdasd(Object.assign({}, req.params, req.body, req.query)))
    );
}

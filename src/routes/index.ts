import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountFIRSTROUTE from './firstRoute';
import mountCHENAPPS from './chenApps';
import mountCENTERAPI from './centerApi';
import mountTHISIS from './thisIs';

export default function addRoutes(router: Router) {
    const api = express.Router();
    const auth = express.Router();

    mountAPI(api);
    mountAuth(auth);

    router.get(
        '/',
        respond(() => ({ message: 'Up and running!' }))
    );

    router.use('/api', api);
    router.use('/auth', auth);

    const firstRoute = Router();
    mountFIRSTROUTE(firstRoute);
    router.use('/firstRoute', firstRoute);

    const chenApps = Router();
    mountCHENAPPS(chenApps);
    router.use('/chenApps', chenApps);

    const centerApi = Router();
    mountCENTERAPI(centerApi);
    router.use('/centerApi', centerApi);

    const thisIs = Router();
    mountTHISIS(thisIs);
    router.use('/thisIs', thisIs);
}

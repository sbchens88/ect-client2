import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountFIRSTROUTE from './firstRoute';
import mountCHENAPPS from './chenApps';
import mountCENTERAPI from './centerApi';
import mountTHISIS from './thisIs';
import mountCOOLAPI from './coolApi';
import mountCOOLESTAPI from './coolestApi';
import mountTESTINGAPING from './testingAping';

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

    const coolApi = Router();
    mountCOOLAPI(coolApi);
    router.use('/coolApi', coolApi);

    const coolestApi = Router();
    mountCOOLESTAPI(coolestApi);
    router.use('/coolestApi', coolestApi);

    const testingAping = Router();
    mountTESTINGAPING(testingAping);
    router.use('/testingAping', testingAping);
}

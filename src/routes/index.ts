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
import mountCHENTESTING from './chenTesting';
import mountLETSAPI from './letsApi';
import mountCHENASQ from './chenAsq';
import mountCHENSAPI from './chensAPi';
import mountJUSTTESTING from './justTesting';
import mountCHENAP from './chenAp';
import mountCHEAPI from './cheApi';
import mountYETANOTHER from './yetAnother';
import mountLOADERCHECK from './loaderCheck';
import mountASDFD from './asdfd';
import mountASDASD from './asdasd';
import mountASDASDASDAS from './asdasdasdas';

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

    const chenTesting = Router();
    mountCHENTESTING(chenTesting);
    router.use('/chenTesting', chenTesting);

    const letsApi = Router();
    mountLETSAPI(letsApi);
    router.use('/letsApi', letsApi);

    const chenAsq = Router();
    mountCHENASQ(chenAsq);
    router.use('/chenAsq', chenAsq);

    const chensAPi = Router();
    mountCHENSAPI(chensAPi);
    router.use('/chensAPi', chensAPi);

    const justTesting = Router();
    mountJUSTTESTING(justTesting);
    router.use('/justTesting', justTesting);

    const chenAp = Router();
    mountCHENAP(chenAp);
    router.use('/chenAp', chenAp);

    const cheApi = Router();
    mountCHEAPI(cheApi);
    router.use('/cheApi', cheApi);

    const yetAnother = Router();
    mountYETANOTHER(yetAnother);
    router.use('/yetAnother', yetAnother);

    const loaderCheck = Router();
    mountLOADERCHECK(loaderCheck);
    router.use('/loaderCheck', loaderCheck);

    const asdfd = Router();
    mountASDFD(asdfd);
    router.use('/asdfd', asdfd);

    const asdasd = Router();
    mountASDASD(asdasd);
    router.use('/asdasd', asdasd);

    const asdasdasdas = Router();
    mountASDASDASDAS(asdasdasdas);
    router.use('/asdasdasdas', asdasdasdas);
}

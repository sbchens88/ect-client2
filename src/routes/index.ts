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
import mountASDSAD from './asdsad';
import mountSDFGHJKL from './sdfghjkl';
import mountCHEN from './chen';
import mountAAPI from './aapi';
import mountPM2REST from './pm2Rest';
import mountBADBAD from './badbad';
import mountTEST1 from './test1';
import mountCHILLKA from './chillka';
import mountTESTINGAPI from './testingApi';
import mountTESTING from './testing';
import mountCHENAPI from './chenApi';
import mountASDASDA from './asdasda';
import mountREFVASD from './refvasd';
import mountPOIKG from './poikg';
import mountVENDORE from './vendorE';
import mountASD from './asd';

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

    const asdsad = Router();
    mountASDSAD(asdsad);
    router.use('/asdsad', asdsad);

    const sdfghjkl = Router();
    mountSDFGHJKL(sdfghjkl);
    router.use('/sdfghjkl', sdfghjkl);

    const chen = Router();
    mountCHEN(chen);
    router.use('/chen', chen);

    const aapi = Router();
    mountAAPI(aapi);
    router.use('/aapi', aapi);

    const pm2Rest = Router();
    mountPM2REST(pm2Rest);
    router.use('/pm2Rest', pm2Rest);

    const badbad = Router();
    mountBADBAD(badbad);
    router.use('/badbad', badbad);

    const test1 = Router();
    mountTEST1(test1);
    router.use('/test1', test1);

    const chillka = Router();
    mountCHILLKA(chillka);
    router.use('/chillka', chillka);

    const testingApi = Router();
    mountTESTINGAPI(testingApi);
    router.use('/testingApi', testingApi);

    const testing = Router();
    mountTESTING(testing);
    router.use('/testing', testing);

    const chenApi = Router();
    mountCHENAPI(chenApi);
    router.use('/chenApi', chenApi);

    const asdasda = Router();
    mountASDASDA(asdasda);
    router.use('/asdasda', asdasda);

    const refvasd = Router();
    mountREFVASD(refvasd);
    router.use('/refvasd', refvasd);

    const poikg = Router();
    mountPOIKG(poikg);
    router.use('/poikg', poikg);

    const vendorE = Router();
    mountVENDORE(vendorE);
    router.use('/vendorE', vendorE);

    const asd = Router();
    mountASD(asd);
    router.use('/asd', asd);
}

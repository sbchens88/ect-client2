import { Router } from 'express';
import mountARTTESTING from './artTesting';

export default function mountPM2REST(router: Router) {
    const artTesting = Router();
    mountARTTESTING(artTesting);
    router.use('/artTesting', artTesting);
}

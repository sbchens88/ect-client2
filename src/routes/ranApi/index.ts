import { Router } from 'express';
import mountRANDCONTROLERC from './randControlerC';

export default function mountRANAPI(router: Router) {
    const randControlerC = Router();
    mountRANDCONTROLERC(randControlerC);
    router.use('/randControlerC', randControlerC);
}

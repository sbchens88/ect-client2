import express, { Router } from 'express';
import mountAPI from './api';
import mountAuth from './auth';
import respond from 'src/middlewares/respond';
import mountEDITORQ from './editorQ';
import mountEDITOR from './editor';
import mountEDITOR_ from './editor_';

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

    const editorQ = Router();
    mountEDITORQ(editorQ);
    router.use('/editorQ', editorQ);

    const editor = Router();
    mountEDITOR(editor);
    router.use('/editor', editor);

    const editor_ = Router();
    mountEDITOR_(editor_);
    router.use('/editor​', editor_);
}

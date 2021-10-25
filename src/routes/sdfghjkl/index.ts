import { Router } from 'express';
import mountLKJHGFDS from './lkjhgfds';

export default function mountSDFGHJKL(router: Router) {
    const lkjhgfds = Router();
    mountLKJHGFDS(lkjhgfds);
    router.use('/lkjhgfds', lkjhgfds);
}
